import * as grpcWeb from 'grpc-web';
import { Injectable } from '@angular/core';
import { profClient } from '../../../proto/ProfServiceClientPb';
import { Professor, profRequest, profResponse, profListRequest, profListResponse } from '../../../proto/prof_pb';
import { BehaviorSubject } from 'rxjs';
import { TracerService } from "./tracer.service"


@Injectable({
  providedIn: 'root'
})
export class ProfClientService {

  private client: profClient;
  private tracerService = new TracerService();
  classCollections: {[val: string]: BehaviorSubject<Professor>} = {};

  constructor() {
    this.client = new profClient('http://localhost:8081');
  }
  
  getProf(name: string): BehaviorSubject<Professor> {
    const span = this.tracerService.getTracer().startSpan('getProf', undefined, this.tracerService.getActiveContext());
    var result = this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
      var request = new profRequest; 
      var result = new BehaviorSubject<Professor>(new Professor());
      request.setName(name);
      console.log(name);
      this.client.getProf(
        request,{'custom-header-1': 'value1', 'traceid':span.spanContext().traceId, 'spanid':span.spanContext().spanId, 'traceflags':span.spanContext().traceFlags.toString()},
        ( err: grpcWeb.Error, response: profResponse ) => {
          if (err) {
            console.log('Error code: ' + err.code + ' "' + err.message + '"');
          }
          result.next(response.getProf());
        }
      )
      return result
    })
    span.end(); 
    return result;
  }

  getProfList(): BehaviorSubject<Professor[]> {
    const span = this.tracerService.getTracer().startSpan('getProfList', undefined, this.tracerService.getActiveContext());
    var result = this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
      console.log("getProfList");
      var request = new profListRequest; 
      var result = new BehaviorSubject<Professor[]>([]);
      this.client.getProfList(
        request,{'custom-header-1': 'value1', 'traceid':span.spanContext().traceId, 'spanid':span.spanContext().spanId, 'traceflags':span.spanContext().traceFlags.toString()},
        ( err: grpcWeb.Error, response: profListResponse ) => {
          if (err) {
            console.log('Error code: ' + err.code + ' "' + err.message + '"');
          }
          result.next(response.getProfsList());
        }
      )
      return result
    })
    span.end(); 
    return result;
  }
}
