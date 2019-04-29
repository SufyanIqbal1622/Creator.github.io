import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "../../Model/user.model";

import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  @ViewChild("join") signupForm: NgForm;

  userData: User;

  constructor(private myRouter: Router, private userService: UserService) {}

  ngOnInit() {
    this.userData = {
      name: "",
      email: "",
      password: "",
     
    };
  }

  onSubmit() {
    if (this.userService.userStatus == "logout") {
      alert("You must logged out after that you can register for new account :(");
      this.myRouter.navigate(["register"]);
    } else {
      this.userData.name = this.signupForm.value.name;
      this.userData.email = this.signupForm.value.email;
      this.userData.password = this.signupForm.value.password;
       this.signupForm.reset();

      this.myRouter.navigate(["/login"]);
      let myObj = JSON.stringify(this.userData);
      localStorage.setItem("myobj", myObj);
      console.log(this.userData);
      setTimeout(() => {
        console.clear();
      }, 5000);
    }
  }
}