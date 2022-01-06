import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosterComponent } from './roster/roster.component'; 
import { RosterClassComponent } from './roster-class/roster-class.component';
import { RosterProfessorComponent } from './roster-professor/roster-professor.component';
import { RosterClassResolver } from './roster-class/roster-class.resolver';
import { RosterProfessorResolver } from './roster-professor/roster-professor.resolver';

const routes: Routes = [
  {
    path: '', 
    component: RosterComponent
  }, 
  {
    path: 'class/ECE/:code', 
    component: RosterClassComponent,
    resolve: {
      classes: RosterClassResolver
    }
  },
  {
    path: 'prof/:name',
    component: RosterProfessorComponent,
    resolve: {
      profs: RosterProfessorResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], 
})
export class RosterRoutingModule { }
