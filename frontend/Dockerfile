FROM python:3.8
WORKDIR /enrollment
ENV FLASK_APP=frontend.py 
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=5000

# RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
RUN apt-get update && apt-get install -y python3 python3-pip
RUN pip3 install grpcio
RUN pip3 install opentelemetry-api
RUN pip3 install opentelemetry-sdk
RUN pip3 install opentelemetry-exporter-jaeger
RUN pip3 install protobuf-to-dict
EXPOSE 5000
COPY . .
CMD ["flask", "run"]