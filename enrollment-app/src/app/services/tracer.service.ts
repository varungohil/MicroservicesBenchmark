import { Injectable } from '@angular/core';
import * as opentelemetry from '@opentelemetry/api'
import  { Resource } from '@opentelemetry/resources'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import { BasicTracerProvider, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import  { registerInstrumentations } from '@opentelemetry/instrumentation'
// import { GrpcInstrumentation } from '@opentelemetry/instrumentation-grpc'
// import { HttpInstrumentation } from '@opentelemetry/instrumentation-http'
// import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
// import { AsyncHooksContextManager } from "@opentelemetry/context-async-hooks";
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { B3Propagator } from '@opentelemetry/propagator-b3';
// import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';
// import { JaegerPropagator } from '@opentelemetry/propagator-jaeger';
import { Span } from '@opentelemetry/api';

@Injectable({
  providedIn: 'root'
})
export class TracerService {
  private tracer;
  private prop;
  constructor() { 
    const provider = new WebTracerProvider({
      resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: 'frontend',
      }),
    });
    const exporter = new OTLPTraceExporter({
      url: "http://localhost:4318/v1/traces"
    });
    provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
    this.prop =  new B3Propagator();
    // provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
    provider.register({
      contextManager: new ZoneContextManager(),
      // propagator: new JaegerPropagator()
      // propagator: new B3Propagator()
    });
    // registerInstrumentations({
    //   instrumentations: [
    //     new XMLHttpRequestInstrumentation(),
    //   ],
    // });
    // registerInstrumentations({
    //   instrumentations: [
    //     new DocumentLoadInstrumentation(),
    //     // new GrpcInstrumentation(),
    //     // new HttpInstrumentation()
    //   ],
    // });
    // const contextManager = new AsyncHooksContextManager();
    // contextManager.enable();
    // opentelemetry.context.setGlobalContextManager(contextManager);
    this.tracer = opentelemetry.trace.getTracer('frontend-tracer');
  }

  getTracer()
  {
    return this.tracer;
  }

  getPropagator()
  {
    return this.prop;
  }

  tryInject()
  {
    // let tmp: opentelemetry.TextMapSetter;
    return opentelemetry.defaultTextMapSetter;
  }

  getActiveContext()
  {
    return opentelemetry.context.active(); 
  }

  setActiveContext(span : Span)
  {
    return opentelemetry.trace.setSpan(opentelemetry.context.active(), span);
  }

  getContext()
  {
    return opentelemetry.context;
  }
}
