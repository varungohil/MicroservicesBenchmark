import { Component, OnInit } from '@angular/core';
import { ClasslistClientService } from '../../services/classlist-client.service';
import { ProfClientService } from '../../services/prof-client.service';
import { Class } from '../../../../proto/classList_pb';
import { Professor } from '../../../../proto/prof_pb';
import { TracerService } from "../../services/tracer.service"

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  classes: Class[] = []
  profs: Professor[] = []
  years: string[] = ["SP21", "FA21"]
  selectedyear:string = "SP21"
  private tracerService = new TracerService();

  constructor(private client1: ClasslistClientService, private client2: ProfClientService) { }

  ngOnInit(): void {
    const span = this.tracerService.getTracer().startSpan('ngOnInit-roster', undefined , this.tracerService.getActiveContext() );
    this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
      this.client1.getClassList(this.selectedyear).asObservable().subscribe(val =>  {
        this.classes = val;
        console.log(this.classes);
      })
      this.client2.getProfList().asObservable().subscribe(val =>  {
        this.profs = val;
        console.log(this.profs);
      })
    })
    span.end()
  }

  public onChange(event:any): void { 
    const span = this.tracerService.getTracer().startSpan('onChange', undefined , this.tracerService.getActiveContext() );
    this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => 
    {
      span.setAttribute("selectedYear", this.selectedyear);
      console.log("Selected Year : " + this.selectedyear);
      this.client1.getClassList(this.selectedyear).asObservable().subscribe(val =>  {
          this.classes = val;
          console.log(this.classes);
        // span.end();
    });
    span.end();
    });
  } 
}
