import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router'; 
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Class } from '../../../../proto/classList_pb';
import { ClasslistClientService } from '../../services/classlist-client.service';


@Injectable({ providedIn: 'root' })
export class RosterClassResolver implements Resolve<Class[]> {
  constructor(private client: ClasslistClientService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Class[]> {
    let ob = this.client.getClassList("all").asObservable(); 
    ob.subscribe(x => console.log(x));
    return ob.pipe(take(2)); 
  }
}