import * as grpcWeb from 'grpc-web';
import { registerClient } from '../../../proto/StudentRegisterServiceClientPb';
import { Request, Response } from '../../../proto/studentRegister_pb';
import { Injectable } from '@angular/core';
import { TracerService } from "./tracer.service"

const wait=(ms: number)=>new Promise(resolve => setTimeout(resolve, ms))

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {
  private validationResult: boolean = false;
  private validationPwdResult: boolean = false;
  private client: registerClient;
  private tracerService = new TracerService();

  constructor() {
    this.client = new registerClient('http://localhost:8081');
  }
  
  static addMessage(message: string, cssClass: string) {
    //$('#first').after($('<div/>').addClass('row').append($('<h2/>').append(
    //  $('<span/>').addClass('label ' + cssClass).text(message))));
  }
  static ERROR(message: string) {
      this.addMessage(message, 'label-primary pull-left');
  }

  updateResult(status: boolean) {
    this.validationResult = status; 
  }

  updatePwdResult(status: boolean) {
    this.validationPwdResult = status; 
  }

  async checkUsername(name : string){
    const span = this.tracerService.getTracer().startSpan('checkUsername', undefined, this.tracerService.getActiveContext());
    var result = this.tracerService.getContext().with(this.tracerService.setActiveContext(span), async () => {
      span.setAttribute("username", name);
      console.log("check username " + name);
      var request = new Request; 
      request.setUsername(name);
      var response = this.client.validateUsername(request,{'custom-header-1': 'value1', 'traceid':span.spanContext().traceId, 'spanid':span.spanContext().spanId, 'traceflags':span.spanContext().traceFlags.toString()})
    
      await response.then((res) => {
        var result = res.getSuccess();
        this.updateResult(result); 
      })
      
      wait(4*1000).then(() => {
        console.log("wresult " + this.validationResult);
      }).catch(() => {
        console.log("Wait is over, callback")
      });
    })  
    console.log("ccheckUsername " + this.validationResult);
    span.setAttribute("validationResult", this.validationResult);
    span.end()
    return this.validationResult;
  }

  async checkPassword(name : string, pwd : string){
    const span = this.tracerService.getTracer().startSpan('checkPassword', undefined, this.tracerService.getActiveContext());
    var result = this.tracerService.getContext().with(this.tracerService.setActiveContext(span), async () => {
      span.setAttribute("username", name);
      console.log("check password " + name);
      var request = new Request; 
      request.setUsername(name);
      request.setPassword(pwd);
      var response = this.client.validatePassword(request,{'custom-header-1': 'value1', 'traceid':span.spanContext().traceId, 'spanid':span.spanContext().spanId, 'traceflags':span.spanContext().traceFlags.toString()})
    
      await response.then((res) => {
        var result = res.getSuccess();
        this.updatePwdResult(result); 
        console.log("checkPassword result " + this.validationPwdResult);
      })
      
      wait(4*1000).then(() => {
        console.log("wresult Pwd " + this.validationPwdResult);
      }).catch(() => {
        console.log("Wait is over, callback")
      });
    })  
    console.log("ccheckPassword " + this.validationPwdResult);
    span.setAttribute("validationPwdResult", this.validationPwdResult);
    span.end();
    return this.validationPwdResult;
  }

  register(username: string, password: string, firstname: string, lastname: string) {
    const span = this.tracerService.getTracer().startSpan('register', undefined, this.tracerService.getActiveContext());
    var result = this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
      span.setAttribute("username", username);
      span.setAttribute("firstname", firstname);
      span.setAttribute("lastname", lastname);
      console.log("register service");
      var request = new Request; 
      request.setUsername(username);
      request.setPassword(password);
      request.setFirstname(firstname);
      request.setLastname(lastname);
      let result : boolean = true;
      this.client.register(
        request,{'custom-header-1': 'value1', 'traceid':span.spanContext().traceId, 'spanid':span.spanContext().spanId, 'traceflags':span.spanContext().traceFlags.toString()},
        ( err: grpcWeb.Error, response: Response) => {
          if (err) {
            RegisterClientService.ERROR('Error code: ' + err.code + ' "' + err.message + '"');
          } 
          result = response.getSuccess();
        }
      )
      return result;
    })
    span.setAttribute("result", result);
    span.end();
    return result;
  }
}
