import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Loginservice } from '../services/loginservice';

@Component({
  selector: 'app-student-registration-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './student-registration-form.html',
  styleUrl: './student-registration-form.css',
})
export class StudentRegistrationForm {

  usernamepattern = /^[^\s].*$/;
  emailpattern = /^[^\s@]+@+[^\s@]+\.[^\s@]+$/;
  phonenumberpattern = /^[6-9][0-9]{9}$/
  addresspattern = /^[^\s].*$/
  passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$&*_]).{8,}$/;

  constructor(private route: Router, private loginservice: Loginservice) { }


  submitform(ngfrm: NgForm) {
    this.loginservice.signupdetails = ngfrm.value;
    sessionStorage.setItem('signupdetails', JSON.stringify(ngfrm.value));


    if (ngfrm.valid) {
      this.route.navigate([''])
    }


  }






}
