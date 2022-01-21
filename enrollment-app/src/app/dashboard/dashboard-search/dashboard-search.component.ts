import { Component, Input, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CartClientService } from '../../services/cart-client.service';
import { StudentStateService } from '../../services/student-state.service';
import { Class, Section } from '../../../../proto/classList_pb';
import { section } from '../../../../proto/studentCart_pb';
import { TracerService } from "../../services/tracer.service"

@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.css']
})
export class DashboardSearchComponent {
  @Input() classes!: Class[];
  @Output() addClassEvent = new EventEmitter<boolean>();
  values = ''
  searchResults: Class[] = [];
  wrkAddQuery:boolean = false;
  private tracerService = new TracerService();

  
  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) { 
      console.log("INSIDE SEARCHHHH constructor");
      // let username:string = "";
      // let code:string = "";
      this.route.queryParams.subscribe(params => {
        this.wrkAddQuery = params['wrkaddquery'];
      });
      if(this.wrkAddQuery)
      {
        console.log("Calling open dialog")
        this.openDialog(this.searchResults[0]);
      }
    }

  // ngOnInit() :void {
  //   if(this.wrkQuery)
  //   {

  //   }
  // }

  openDialog(class_: Class): void {
    const span = this.tracerService.getTracer().startSpan('openDialog', undefined, this.tracerService.getActiveContext());
    var result = this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
      const dialogRef = this.dialog.open(DialogSearch, {
        data: class_
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.addClassEvent.emit(result);
        console.log(result);
      });
    });
  span.end();
  }

  ngAfterViewInit(): void {
  }

  search(event: any) {
    const span = this.tracerService.getTracer().startSpan('search-dashboard', undefined, this.tracerService.getActiveContext());
    var result = this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
      this.searchResults = []
      let query = event.target.value; 
      if (query != '') {
        this.searchResults = this.classes.filter(
          class_ => ( class_.getTitle().includes(query) || class_.getCode().includes(query) || class_.getTitle().toLowerCase().includes(query.toLowerCase()) || class_.getCode().toLowerCase().includes(query.toLowerCase()) ));
      }
    });
    span.end();
  }

  visitClass(classNum: any) {
    this.router.navigate(
      ['class/ECE/'+classNum], { relativeTo: this.route },
    );
  }
}

@Component({
  selector: 'dialog-search-add',
  templateUrl: 'add-dialog.html',
  styleUrls: ['./dashboard-search.component.css']
})
export class DialogSearch {
  lecs: Section[]=[]; 
  labs: Section[]=[]; 
  discs: Section[]=[];
  selectedLec = ""; 
  selectedLab = ""; 
  selectedDis = ""; 
  wrkAddQuery:boolean = false;
  user: string = "";
  courseCode: string = "";
  lec:string = "";
  lab:string = "";
  dis:string = "";
  private tracerService = new TracerService();

  constructor(
    public dialogRef: MatDialogRef<DialogSearch>,
    @Inject(MAT_DIALOG_DATA) public data: Class, private cartClient: CartClientService, private student: StudentStateService, private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.wrkAddQuery = params['wrkaddquery'];
        this.courseCode = "ECE " + params['code'];
        this.lec =  params['lec']
        this.dis =  params['dis']
        this.lab =  params['lab']
        this.user = params['user']
      });
      console.log(this.wrkAddQuery + " " + this.courseCode + " " + this.user)
      if(this.wrkAddQuery)
      {
        console.log("Inside wrkAddquery dialog")
        var secslist:section[] = [];
        // console.log("this.secs = " + this.secs)
        // for(var sec in this.secs)
        // {
        //   console.log(sec)
        if(this.lec != "")
        {
          var newsection:section = new section();
          newsection.setSec(this.lec);
          secslist[0] = newsection
        }
        if(this.lab != "")
        {
          var newsection:section = new section();
          newsection.setSec(this.lab);
          secslist[1] = newsection
        }
        if(this.dis != "")
        {
          var newsection:section = new section();
          newsection.setSec(this.dis);
          secslist[2] = newsection
        }
          // secslist[i] = newsection;
          // i++;
        // }
        console.log(secslist);
        console.log("Adding class");
        this.cartClient.addClass(this.user, this.courseCode, secslist );
      }
      else
      {
        console.log("Inside Dialog Search")

        this.lecs = data.getSectionsList().filter(section => section.getTitle().includes("LEC"));
        this.labs = data.getSectionsList().filter(section => section.getTitle().includes("LAB"));
        this.discs = data.getSectionsList().filter(section => section.getTitle().includes("DIS"));
        if (this.lecs.length > 0) this.selectedLec = this.lecs[0].getTitle(); 
        if (this.labs.length > 0) this.selectedLab = this.labs[0].getTitle(); 
        if (this.discs.length > 0) this.selectedDis = this.discs[0].getTitle(); 
      }    
    }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onSubmit() {
    const span = this.tracerService.getTracer().startSpan('onSubmit-dialog', undefined, this.tracerService.getActiveContext());
    var result = this.tracerService.getContext().with(this.tracerService.setActiveContext(span), () => {
      var sectionList:section[] = [];
      //if( this.selectedLec != '') this.lecSuccess = this.cartClient.addClass(this.student.getUsername(), this.data.getCode(), this.selectedLec );
      let i=0
      if( this.selectedLec != '') {
        console.log(this.selectedLec)
        var newsection:section = new section();
        newsection.setSec(this.selectedLec);
        sectionList[i] = newsection;
        i++;
      } 
      if( this.selectedLab != '') {
        console.log(this.selectedLab)
        var newsection:section = new section();
        newsection.setSec(this.selectedLab);
        sectionList[i] = newsection;
        i++;
      } 
      if( this.selectedDis != '') {
        console.log(this.selectedDis)
        var newsection:section = new section();
        newsection.setSec(this.selectedDis);
        sectionList[i] = newsection;
        i++;
      } 
      console.log("Section List = " + sectionList)
  
      this.cartClient.addClass(this.student.getUsername(), this.data.getCode(),sectionList );
      // alert main component about the dialog result. 
      this.dialogRef.close(this.selectedLec != ''||this.selectedLec != ''||this.selectedLec != '');
    });
    span.end();
  }
}