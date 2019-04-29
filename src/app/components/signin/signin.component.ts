import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  public emaile="";
  public password="";
  
  @ViewChild("login") reqUser: NgForm;
  constructor(private myRouter: Router, private userService: UserService) {}

  ngOnInit() {
   

  }
  onSubmit() {
    let myobj = JSON.parse(localStorage.getItem("myobj"));
    if (
      this.reqUser.value.email == myobj.email &&
      this.reqUser.value.password == myobj.password
    ) {
      alert("Welcome " + myobj.name);
      this.userService.userStatus = "Logout";
      this.myRouter.navigate(["home"]);
    } else {
      alert("Incorrect Email or Password");
      this.myRouter.navigate(["login"]);
    }
  }
}