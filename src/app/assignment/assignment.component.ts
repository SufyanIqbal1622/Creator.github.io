import { Component, OnInit } from '@angular/core';
import { CourseService } from "src/app/services/course.service";
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

 
  constructor(private cs: CourseService) { }

  ngOnInit() {
  }

  ASPassignment: any;
  PHPassignment: any;
  AngularAssignment: any;

  getAspAssignments() {
    this.cs.aspAssignments().subscribe( response => { this.ASPassignment = response } );
  }

  getPHPassignments() {
    this.cs.phpAssignments().subscribe( response => { this.PHPassignment = response } ); 
  }

  getAngularAssignments() {
    this.cs.angularAssignments().subscribe( response => { this.AngularAssignment = response } );
  }

}
