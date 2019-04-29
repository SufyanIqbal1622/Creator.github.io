import { Component, OnInit } from '@angular/core';
import { CourseService } from "src/app/services/course.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private ms: CourseService) {}
  

  ngOnInit() {
    
  }
  
  getC1() {
    this.ms.C1().subscribe(console.log);
  }

  getC2() {
    this.ms.C2().subscribe(console.log);
  }

  getC3() {
    this.ms.C3().subscribe(console.log);
  }
  getAspInfo() {
    this.ms.aspInfo().subscribe(console.log);
  }

  getPHPinfo() {
    this.ms.phpInfo().subscribe(console.log);
  }

  getWebInfo() {
    this.ms.webInfo().subscribe(console.log);
  }
  
}



