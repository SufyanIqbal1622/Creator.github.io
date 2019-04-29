import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"]
})
export class BodyComponent implements OnInit {
  constructor(private userService: UserService) {}
  userStatus: string;
  ngOnInit() {
    this.userStatus = this.userService.userStatus;
  }
}