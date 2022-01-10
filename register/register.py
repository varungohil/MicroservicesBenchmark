from concurrent import futures
import random
import pymongo
from google.protobuf.json_format import MessageToJson
import bcrypt

import grpc

from studentRegister_pb2 import (
    Request,
    Response,
)
import studentRegister_pb2_grpc

from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.resources import SERVICE_NAME, Resource
from opentelemetry.exporter.jaeger.thrift import JaegerExporter
from opentelemetry.sdk.trace.export import BatchSpanProcessor
provider = TracerProvider(resource=Resource.create({SERVICE_NAME: "register"}))
trace.set_tracer_provider(provider)
# print("Created provider")
jaeger_exporter = JaegerExporter(
    agent_host_name="jaeger-agent",
    agent_port=6831,
)
trace.get_tracer_provider().add_span_processor(
    BatchSpanProcessor(jaeger_exporter)
)
tracer = trace.get_tracer(__name__)
# from jaeger_client import Config
# config = Config(
#     config={ # usually read from some yaml config
#         'sampler': {
#             'type': "const",
#             'param': 1,
#         },
#         'local_agent': {
#             'reporting_host': 'jaeger-agent',
#             'reporting_port': '6831',
#         }
#     },
#     service_name='register',
# )
# tracer = config.initialize_tracer()

client = pymongo.MongoClient("register_db",27017)
client_2 = pymongo.MongoClient("cart_db",27017)
# client_3 = pymongo.MongoClient("wishlist_db",27017)
db = client.register
salt = bcrypt.gensalt()
db_2 = client_2.cart
# db_3 = client_3.wishlist

class registerService(
    studentRegister_pb2_grpc.registerServicer
):
    def validateUsername(self, request, context):
        with tracer.start_as_current_span('validateUsername') as span:
            span.set_attribute("user_name",request.userName)
            if( db.studentInfo.count_documents({"userName":request.userName}) > 0 ):
                print("failed name validaion")
                return Response(success=False)
            else:
                print("succeed name validaion")
                return Response(success=True)
    
    def validatePassword(self, request, context):
        with tracer.start_as_current_span('validatePassword') as span:
            span.set_attribute("user_name",request.userName)
            pwd = db.studentInfo.find_one({"userName":request.userName})["password"]
            if( not bcrypt.checkpw(request.password,pwd) ):
                print("failed pwd validaion")
                return Response(success=False)
            else:
                print("succeed pwd validaion")
                return Response(success=True)

    def register(self, request, context):
        with tracer.start_as_current_span('register') as span:
            span.set_attribute("user_name",request.userName)
            span.set_attribute("first_name",request.firstName)
            span.set_attribute("last_name",request.lastName)
            # global client,db
            if( db.studentInfo.count_documents({"userName":request.userName}) > 0 ):
                print("failed register: user already exists")
                return Response(success=False)
            hashed = bcrypt.hashpw(request.password.encode('utf-8'), salt)
            request1 = {'userName':request.userName, 'password':hashed, 'firstName':request.firstName, 'lastName': request.lastName, }
            request2 = {'userName':request.userName, 'cart':[],}
            # request3 = {'userName':request.userName, 'wishlist':[],}
            db_2.cartInfo.insert_one(request2)
            # db_3.wishlistInfo.insert_one(request3)
            db.studentInfo.insert_one(request1)
            return Response(success=True)
    
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=20))
    studentRegister_pb2_grpc. add_registerServicer_to_server(
        registerService(), server
    )
    server.add_insecure_port("0.0.0.0:5001")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
