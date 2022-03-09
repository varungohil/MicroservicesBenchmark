import time
import grpc
from flask import Flask, render_template, request, jsonify
from opentelemetry import context, baggage, trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.resources import SERVICE_NAME, Resource
from opentelemetry.exporter.jaeger.thrift import JaegerExporter
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.trace.propagation.tracecontext import TraceContextTextMapPropagator
from classList_pb2_grpc import classlistStub
from classList_pb2 import (
    classListRequest,
    classListResponse,
    Class, 
    Section,
    Time,
)
from prof_pb2 import (
    profRequest,
    profResponse,
    profListRequest,
    profListResponse,
    Professor,
)
from prof_pb2_grpc import profStub
from studentRegister_pb2_grpc import registerStub
from studentRegister_pb2 import (
    Request,
    Response,
)
from studentCart_pb2 import (
    classRequest,
    classResponse,
    cartRequest,
    cartResponse,
    section,
)
from studentCart_pb2_grpc import cartStub

provider = TracerProvider(resource=Resource.create({SERVICE_NAME: "flask-frontend"}))
trace.set_tracer_provider(provider)
jaeger_exporter = JaegerExporter(
    agent_host_name="jaeger-agent",
    agent_port=6831,
)
trace.get_tracer_provider().add_span_processor(
    BatchSpanProcessor(jaeger_exporter)
)
tracer = trace.get_tracer(__name__)


app = Flask(__name__)

@app.route('/')
def view():
    with tracer.start_as_current_span('view') as span:
        return render_template('index.html')

@app.route('/wrk2-api/classlist', methods = ['GET'])
def getClassList():
    with tracer.start_as_current_span(name="flask-classlist") as span:
        channel = grpc.insecure_channel("classlist:5002")
        year = request.args.get('year', default = "FA21")
        span.set_attribute("year", year)
        client = classlistStub(channel)
        carrier = {}
        TraceContextTextMapPropagator().inject(carrier=carrier)
        response = client.getClassList(classListRequest(year = str(year)), metadata = list(carrier.items()))
        return ""

@app.route('/wrk2-api/class', methods = ['GET'])
def getClass():
    with tracer.start_as_current_span(name="flask-class") as span:
        channel = grpc.insecure_channel("classlist:5002")
        code = request.args.get('code')
        classcode = f"ECE {code}"
        span.set_attribute("code", code)
        client = classlistStub(channel)
        carrier = {}
        TraceContextTextMapPropagator().inject(carrier=carrier)
        response = client.getClassList(classListRequest(year = "all"), metadata = list(carrier.items()))
        reqClass = filter(lambda x: x.code == classcode , list(response.classes) )
        return ""

@app.route('/wrk2-api/proflist',  methods = ['GET'])
def getProfList():
    with tracer.start_as_current_span(name="flask-proflist") as span:
        channel = grpc.insecure_channel("prof:5004")
        client = profStub(channel)
        carrier = {}
        TraceContextTextMapPropagator().inject(carrier=carrier)
        response = client.getProfList(profListRequest(), metadata = list(carrier.items()))
        return ""

@app.route('/wrk2-api/prof', methods = ['GET'])
def getProf():
    with tracer.start_as_current_span(name="flask-prof") as span:
        channel = grpc.insecure_channel("prof:5004")
        name = request.args.get('name', default = "Christina Delimitrou")
        span.set_attribute("prof", name)
        client = profStub(channel)
        carrier = {}
        TraceContextTextMapPropagator().inject(carrier=carrier)
        response = client.getProf(profRequest(name=name), metadata = list(carrier.items()))
        return ""


@app.route('/wrk2-api/register',   methods = ['POST'])
def register():
    with tracer.start_as_current_span(name="flask-register") as span:
        channel = grpc.insecure_channel("register:5001")
        username = request.args.get('username', default = "user")
        password = request.args.get('password', default = "pass")
        firstname = request.args.get('firstname', default = "FN")
        lastname = request.args.get('lastname', default = "LN")
        span.set_attribute("username", username)
        span.set_attribute("firstname", firstname)
        span.set_attribute("lastname", lastname)
        span.set_attribute("password", password)
        client = registerStub(channel)
        carrier = {}
        TraceContextTextMapPropagator().inject(carrier=carrier)
        response = client.register(Request(userName=username, password = password, firstName = firstname, lastName = lastname), metadata = list(carrier.items()))
        return ""

@app.route('/wrk2-api/cart', methods = ['GET'])
def getCart():
    with tracer.start_as_current_span(name="flask-getcart") as span:
        channel = grpc.insecure_channel("cart:5003")
        username = request.args.get('username', default = "user")
        span.set_attribute("username", username)
        client = cartStub(channel)
        carrier = {}
        TraceContextTextMapPropagator().inject(carrier=carrier)
        response = client.getCart(cartRequest(userName=username), metadata = list(carrier.items()))
        return ""

@app.route('/wrk2-api/addclass', methods = ['POST'])
def addClass():
    with tracer.start_as_current_span(name="flask-addclass") as span:
        channel = grpc.insecure_channel("cart:5003")
        username = request.args.get('username', default = "user")
        code = request.args.get('code')
        lec = request.args.get('lec')
        lab = request.args.get('lab')
        disc = request.args.get('disc')
        span.set_attribute("username", username)
        span.set_attribute("courseCode", code)
        span.set_attribute("lecture", lec)
        span.set_attribute("lab", lab)
        span.set_attribute("discussion", disc)
        secs = []
        if lec is not None:
            secs.append(section(sec = lec))
        if disc is not None:
            secs.append(section(sec = disc))
        if lab is not None:
            secs.append(section(sec = lab))
        client = cartStub(channel)
        carrier = {}
        TraceContextTextMapPropagator().inject(carrier=carrier)
        response = client.addClass(classRequest(userName=username, courseCode = code, sectionList = secs), metadata = list(carrier.items()))
        return ""

@app.route('/wrk2-api/dropclass', methods = ['POST'])
def dropClass():
    with tracer.start_as_current_span(name="flask-dropclass") as span:
        channel = grpc.insecure_channel("cart:5003")
        username = request.args.get('username', default = "user")
        code = request.args.get('code', default = "ECE1210")
        lec = request.args.get('lec')
        lab = request.args.get('lab')
        disc = request.args.get('disc')
        span.set_attribute("username", username)
        span.set_attribute("courseCode", code)
        span.set_attribute("lecture", lec)
        span.set_attribute("lab", lab)
        span.set_attribute("discussion", disc)
        secs = []
        if lec is not None:
            secs.append(section(sec = lec))
        if disc is not None:
            secs.append(section(sec = disc))
        if lab is not None:
            secs.append(section(sec = lab))
        client = cartStub(channel)
        carrier = {}
        TraceContextTextMapPropagator().inject(carrier=carrier)
        response = client.dropClass(classRequest(userName=username, courseCode = code, sectionList = secs), metadata = list(carrier.items()))
        return ""