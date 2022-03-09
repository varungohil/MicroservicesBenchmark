from concurrent import futures
import random
import pymongo
from google.protobuf.json_format import MessageToJson
import grpc

from studentCart_pb2 import (
    classRequest,
    classResponse,
    cartRequest,
    cartResponse,
)
import studentCart_pb2_grpc

from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.resources import SERVICE_NAME, Resource
from opentelemetry.exporter.jaeger.thrift import JaegerExporter
from opentelemetry.sdk.trace.export import BatchSpanProcessor

from opentelemetry.trace.propagation.tracecontext import TraceContextTextMapPropagator

provider = TracerProvider(resource=Resource.create({SERVICE_NAME: "cart"}))
trace.set_tracer_provider(provider)
jaeger_exporter = JaegerExporter(
    agent_host_name="jaeger-agent",
    agent_port=6831,
)
trace.get_tracer_provider().add_span_processor(
    BatchSpanProcessor(jaeger_exporter)
)
tracer = trace.get_tracer(__name__)

client = pymongo.MongoClient("classlist_db",27017)
client_2 = pymongo.MongoClient("cart_db",27017)
db = client.classlist
db_2 = client_2.cart
class cartService(
    studentCart_pb2_grpc.cartServicer
):
    def addClass(self, request, metadata):
        ctx = TraceContextTextMapPropagator().extract(dict(metadata.invocation_metadata()))
        with tracer.start_as_current_span('addClass', context = ctx) as span:
            span.set_attribute("user_name", request.userName)
            span.set_attribute("course_code",request.courseCode )
            if(db.classInfo.find_one({"course_code":request.courseCode})["year"] != "SP21"):
                return classResponse(success=False)
            size = db.classInfo.find_one({"course_code":request.courseCode})["size"]
            if ( size == 0 ): # class is full
                return classResponse(success=False)
            title = db.classInfo.find_one({"course_code":request.courseCode})["titles"]
            span.set_attribute("course_title",title )
            credit = db.classInfo.find_one({"course_code":request.courseCode})["credit"]  
            course_info = db.classInfo.find_one({"course_code":request.courseCode},{"course_info":1})["course_info"]
            for section in request.sectionList:
                for course in course_info:
                    if course["section"] == section.sec:
                        cart = db_2.cartInfo.find_one({"userName":request.userName})["cart"]
                        courseTime = course["times"].split(" ")
                        del courseTime[1]
                        # changing time to int and adding 12 hoursr if PM
                        for i in range(len(courseTime)):
                            courseTime[i] = courseTime[i].replace(":","")
                            if "am" in courseTime[i]:
                                courseTime[i] = int (courseTime[i][0:courseTime[i].find('am')])
                            else:
                                courseTime[i] = int (courseTime[i][0:courseTime[i].find('pm')]) + 1200
                        for Class in cart:
                            if Class["courseCode"] == request.courseCode and Class["section"] == section.sec:
                                return classResponse(success=False)  # return false if class already exists in the cart
                            time = Class["time"].split(" ")
                            del time[1]
                            if Class["days"] in course["days"]: # only check for time conflict if there is an operlap of days
                                for i in range(len(time)):
                                    time[i] = time[i].replace(":","")
                                    if "am" in time[i]:
                                        if(time[i][:2] == "12"):
                                            time[i] = int (time[i][0:time[i].find('am')]) - 1200
                                        else:
                                            time[i] = int (time[i][0:time[i].find('am')])
                                    else:
                                        if(time[i][:2] == "12"):
                                            time[i] = int (time[i][0:time[i].find('pm')])
                                        else:
                                            time[i] = int (time[i][0:time[i].find('pm')]) + 1200
                                if ( time[1] > courseTime[0] and time[0] < courseTime[1] ):
                                    # need to remove all existing section of the course
                                    i = 0 # used to find the position of the class in the cart which will be removed
                                    cartNew = []
                                    for Class_ in cart:
                                        if Class_["courseCode"] != request.courseCode:
                                            cartNew.append(Class_)
                                        else:
                                            i+=1
                                    db_2.cartInfo.update_one({"userName":request.userName}, {"$set" : {"cart" : cartNew}})
                                    return classResponse(success=False) # returns false due to time conflict"""
                        request_1 = {"courseCode":request.courseCode,"title":title,"section":section.sec,"classNumber":course["class_numbers"],"days":course["days"],"time":course["times"], "instructor":course["instructors"],"credit":credit}
                        cart.append(request_1)
                        db_2.cartInfo.update_one({"userName":request.userName}, {"$set" : {"cart" : cart}}) # updating the cart of the user after adding the new class
            db.classInfo.update_one( {"course_code":request.courseCode}, {"$inc" :{"size":-1} } ) # decrement size of the class
            return classResponse(success=True)

    def dropClass(self, request, metadata):
        ctx = TraceContextTextMapPropagator().extract(dict(metadata.invocation_metadata()))
        with tracer.start_as_current_span('dropClass', context = ctx) as span:
            span.set_attribute("course_code",request.courseCode )
            cart = db_2.cartInfo.find_one({"userName":request.userName})["cart"]
            i = 0 # used to find the position of the class in the cart which will be removed
            cartNew = []
            dropped = False
            for Class in cart:
                if Class["courseCode"] != request.courseCode:
                    cartNew.append(Class)
                else:
                    dropped = True
            db_2.cartInfo.update_one({"userName":request.userName}, {"$set" : {"cart" : cartNew}})
            if (dropped):
                db.classInfo.update_one( {"course_code":request.courseCode}, {"$inc" :{"size":1} } ) # increment size of the class only if the class is dropped
                return classResponse(success=True)
            return classResponse(success=False)

    def getCart(self, request, metadata):
        ctx = TraceContextTextMapPropagator().extract(dict(metadata.invocation_metadata()))
        with tracer.start_as_current_span('getCart', context = ctx) as span:
            span.set_attribute("user_name", request.userName)
            cart = db_2.cartInfo.find_one({"userName": request.userName})["cart"]
            return cartResponse(list=cart)
    
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=20))
    studentCart_pb2_grpc. add_cartServicer_to_server(
        cartService(), server
    )
    server.add_insecure_port("0.0.0.0:5003")
    server.start()
    server.wait_for_termination()

if __name__ == "__main__":
    serve()