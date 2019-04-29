import { Injectable } from "@angular/core";
import { TouchSequence } from "selenium-webdriver";

@Injectable({
  providedIn: "root"
})
export class UserService {
  userStatus: string;
  userLoggedOut: boolean;

  constructor() {
    this.userStatus = "Login";
    this.userLoggedOut = false;
  }

  getUserLoggedOut() {
    return this.userLoggedOut;
  }
  setUserLoggedOut() {
    this.userLoggedOut = true;
  }
}