import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SignupComponent } from "./components/signup/signup.component";
import { SigninComponent } from "./components/signin/signin.component";
import { OurteamComponent } from "./components/ourteam/ourteam.component";

import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "register", component: SignupComponent },
  { path: "Dshboard", component: DashboardComponent  },
  { path: "login", component: SigninComponent },
  { path: "authors", component: OurteamComponent },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const myRouting = [
  HomeComponent,
  SignupComponent,
  SigninComponent,
  OurteamComponent,
  DashboardComponent 
];