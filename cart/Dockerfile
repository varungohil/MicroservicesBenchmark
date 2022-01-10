FROM python:3.8
WORKDIR /cart

#INSTALL Python 3
RUN apt-get update && apt-get install -y python3 python3-pip
# RUN apt-get -y install python3.7-dev
RUN pip3 install pymongo
RUN pip3 install grpcio
RUN pip3 install google-cloud
RUN pip3 install google-cloud-vision
RUN pip3 install opentelemetry-api
RUN pip3 install opentelemetry-sdk
RUN pip3 install opentelemetry-exporter-jaeger
RUN pip3 install opentelemetry-propagator-jaeger
RUN pip3 install opentelemetry-instrumentation
RUN pip3 install opentelemetry-instrumentation-grpc
# RUN pip3 install jaeger-client
COPY . .
CMD ["python", "./cart.py"]