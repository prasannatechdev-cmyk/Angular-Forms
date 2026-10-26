import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Loginservice } from '../services/loginservice';

@Component({
  selector: 'app-student-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './student-login-form.html',
  styleUrl: './student-login-form.css',
})
export class StudentLoginForm {

  constructor(private router: Router, private loginservice: Loginservice) { }

  invalid_details = false;


  submitform(frm: NgForm) {
    this.loginservice.logindetails = frm.value;
    sessionStorage.setItem('logindetails', JSON.stringify(frm.value));

    console.log(frm.value)
    if (frm.invalid) {
      alert("fill details")
    }
    else if (this.loginservice.signupdetails.email !== this.loginservice.logindetails.email) {
      this.invalid_details = true

    }
    else {
      this.router.navigate(['/student-details'])
    }
  }






}
