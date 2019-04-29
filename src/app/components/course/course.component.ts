import { Component, OnInit } from "@angular/core";

import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
 

  constructor(private cs: CourseService) {}

  ngOnInit() {
    
  }
  C2:any;
  C1:any;
  C3:any;
  ASPresult: any;
  PHPresult: any;
  Webresult: any;
  getC1(){
    this.cs.aspInfo().subscribe( response => { this.C1 = response } );
    this.cs.aspInfo().subscribe( response => { this.C2 = response } );
    this.cs.aspInfo().subscribe( response => { this.C3 = response } );
    this.cs.aspInfo().subscribe( response => { this.ASPresult = response } );
    this.cs.phpInfo().subscribe( response => { this.PHPresult = response } );
    this.cs.webInfo().subscribe( response => { this.Webresult = response } );
  }
  getC2(){
    this.cs.aspInfo().subscribe( response => { this.C2 = response } );
  }
  getC3(){
    this.cs.aspInfo().subscribe( response => { this.C3 = response } );
  }

  getASPInfo() {
    this.cs.aspInfo().subscribe( response => { this.ASPresult = response } );
  }

  getPHPinfo() {
    this.cs.phpInfo().subscribe( response => { this.PHPresult = response } );
  }

  getWebInfo() {
    this.cs.webInfo().subscribe( response => { this.Webresult = response } );
  }

}
