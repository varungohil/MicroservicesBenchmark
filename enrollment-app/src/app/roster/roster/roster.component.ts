import { Component, OnInit } from '@angular/core';
import { ClasslistClientService } from '../../services/classlist-client.service';
import { ProfClientService } from '../../services/prof-client.service';
import { Class } from '../../../../proto/classList_pb';
import { Professor } from '../../../../proto/prof_pb';

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

  constructor(private client1: ClasslistClientService, private client2: ProfClientService) { }

  ngOnInit(): void {
    this.client1.getClassList('SP21').asObservable().subscribe(val =>  {
      this.classes = val;
      console.log(this.classes);
    })
    this.client2.getProfList().asObservable().subscribe(val =>  {
      this.profs = val;
      console.log(this.profs);
    })
  }

  public onChange(event:any): void { 
    console.log("Selected Year : " + this.selectedyear);
    this.client1.getClassList(this.selectedyear).asObservable().subscribe(val =>  {
      this.classes = val;
      console.log(this.classes);
    })
  }
}
