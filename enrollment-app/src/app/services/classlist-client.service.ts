import * as grpcWeb from 'grpc-web';
import { Injectable } from '@angular/core';
import { classlistClient } from '../../../proto/ClassListServiceClientPb';
import { Class, classListRequest, classListResponse } from '../../../proto/classList_pb';
import { BehaviorSubject } from 'rxjs';
import { TracerService } from "./tracer.service"

@Injectable({
  providedIn: 'root'
})
export class ClasslistClientService {

  private client: classlistClient;
  private tracerService = new TracerService();
  classCollections: {[val: string]: BehaviorSubject<Class[]>} = {};

  constructor() {
    this.client = new classlistClient('http://localhost:8081');
  }
  
  getClassList(year: string): BehaviorSubject<Class[]> {
    const span = this.tracerService.getTracer().startSpan('getClassList', undefined, this.tracerService.getActiveContext());
    var result = this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
      var request = new classListRequest; 
      var result = new BehaviorSubject<Class[]>([]);
      request.setYear(year);
      console.log("getClassList -> " + year);
      // var ctx = span.spanContext();
      // const headers: { [key: string]: unknown } = {}
      // console.table(headers)
      // this.tracerService.getPropagator().inject(this.tracerService.getActiveContext(), headers, this.tracerService.tryInject());
      // console.log("headers = " + headers)
      // console.table(this.tracerService.getActiveContext())
      // console.log(JSON.stringify(this.tracerService.getActiveContext()))
      // console.table(span.spanContext())
      this.client.getClassList(
        request,{'custom-header-1': 'value1', 'traceid':span.spanContext().traceId, 'spanid':span.spanContext().spanId, 'traceflags':span.spanContext().traceFlags.toString()},
        ( err: grpcWeb.Error, response: classListResponse ) => {
          if (err) {
            console.log('Error code: ' + err.code + ' "' + err.message + '"');
          }
          result.next(response.getClassesList());
        }
      )
      span.end();
      return result;

    })
    
    return result;
  }
}
