import { Component, OnInit, Input } from '@angular/core';
import { Class } from '../../../../proto/classList_pb';
import { Professor } from '../../../../proto/prof_pb';
import { ActivatedRoute, Router } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ClasslistClientService } from '../../services/classlist-client.service';

@Component({
  selector: 'app-roster-search',
  templateUrl: './roster-search.component.html',
  styleUrls: ['./roster-search.component.css']
})
export class RosterSearchComponent implements OnInit {
  @Input() classes: Class[];
  @Input() profs: Professor[];
  allClasses: Class[] = [];
  searchResults: Class[] = [];
  searchProfResults: Professor[] = [];
  noClassMatch: boolean = false;
  noProfMatch: boolean = false;
  private client: ClasslistClientService = new ClasslistClientService(); 
  

  constructor(private router: Router, private route: ActivatedRoute) { this.classes = []; this.profs = []; }

  ngOnInit(): void {
    this.client.getClassList("all").asObservable().subscribe(val =>  {
      this.allClasses = val;
      // console.log(this.classes);
    })
    // this.client.getClassList("SP21").asObservable().subscribe(val =>  {
    //   console.log("search init");
    //   console.log(val);
    //   this.allClasses = [...this.allClasses, ...val];
    //   // console.log(this.classes);
    // })
  }

  search(event: any) {
    this.searchResults = []
    let query = event.target.value; 
    if (query != '') {
      this.searchResults = this.allClasses.filter(
        class_ => ( class_.getTitle().includes(query) || class_.getCode().includes(query) || class_.getTitle().toLowerCase().includes(query.toLowerCase()) || class_.getCode().toLowerCase().includes(query.toLowerCase()) ));
        if(this.searchResults.length == 0)
        {
          this.noClassMatch = true;
        }
        else
        {
          this.noClassMatch = false;
        }
      }
    else{
      this.noClassMatch = false;
    }
  }

  visitClass(classNum: any) {
    this.router.navigate(
      ['class/ECE/'+classNum], { relativeTo: this.route },
    );
  }

  searchProf(event: any) {
    this.searchProfResults = []
    let query = event.target.value; 
    if (query != '') {
      console.log(this.profs)
      console.log(query)
      this.searchProfResults = this.profs.filter(
        prof_ => ( prof_.getName().includes(query) || prof_.getName().toLowerCase().includes(query.toLowerCase()) ));
      if(this.searchProfResults.length == 0)
      {
        this.noProfMatch = true;
      }
      else
      {
        this.noProfMatch = false;
      }
      console.log("noProfMatch = " + this.noProfMatch);
    }
    else{
      this.noProfMatch = false;
    }
  }

  visitProf(profName: any) {
    console.log(profName)
    this.router.navigate(
      ['prof/'+profName], { relativeTo: this.route },
    );
  }

}