import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../../../../proto/classList_pb';
import { Router } from '@angular/router';
import { TracerService } from "../../services/tracer.service"

@Component({
  selector: 'app-roster-card',
  templateUrl: './roster-card.component.html',
  styleUrls: ['./roster-card.component.css']
})

export class RosterCardComponent implements OnInit {
  @Input() class: Class;
  recommendationsString: string = '';
  recommendations: Array<String> = [];
  private tracerService = new TracerService();

  constructor(private router: Router) { 
    this.class = new Class(); 
  }

  ngOnInit(): void {
    console.log(this.class);
    this.recommendationsString = this.class.getRecommendation();
    this.recommendations = this.recommendationsString.split(';');
  }

  visitProf(profName: string) {
    const span = this.tracerService.getTracer().startSpan('visitProf-rostercard', undefined , this.tracerService.getActiveContext() );
    this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
      span.setAttribute("prof_name",  profName)
      var idx = profName.indexOf('(')-2
      profName = profName.substr(0,idx)
      console.log(profName)
    });
    span.end()
    this.router.navigate(
      ['roster/prof/'+profName], 
    );
  }
}
