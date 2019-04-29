import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  userStatus: string;
  userloggedInStatus: boolean;

  constructor(private userService: UserService, private myRouter: Router) {}

  ngOnInit() {
    this.userStatus = this.userService.userStatus;
    this.userloggedInStatus = this.userService.userLoggedOut;
  }

  onCheckLog() {
    if (this.userStatus == "Login") {
      this.myRouter.navigate(["login"]);
    }
    if (this.userStatus == "Logout") {
      alert("You logged out ");
      this.myRouter.navigate(["login"]);
      this.userService.userStatus = "Login";

      this.userService.setUserLoggedOut();
    }
  }
}