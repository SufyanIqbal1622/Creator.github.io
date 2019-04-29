import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule, myRouting } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from "./components/body/body.component";
import { FooterComponent } from "./components/footer/footer.component";
import { OurteamComponent } from "./components/ourteam/ourteam.component";
import { CourseService } from "./services/course.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CourseComponent } from "./components/course/course.component";
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    myRouting,

    BodyComponent,
    FooterComponent,
    OurteamComponent,
    DashboardComponent,
    AssignmentComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
     FormsModule,
      HttpClientModule,
      ReactiveFormsModule      
    ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {}