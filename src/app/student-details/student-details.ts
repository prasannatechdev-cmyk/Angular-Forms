import { Component } from '@angular/core';
import { Loginservice } from '../services/loginservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails {


constructor(public loginservice:Loginservice, private router:Router){}



 logout() {
    sessionStorage.clear();

    this.loginservice.signupdetails = {};
    this.loginservice.logindetails = {};

    this.router.navigate(['']);
  }




}
