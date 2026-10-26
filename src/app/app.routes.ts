import { Routes } from '@angular/router';
import { StudentRegistrationForm } from './student-registration-form/student-registration-form';
import { StudentLoginForm } from './student-login-form/student-login-form';
import { StudentDetails } from './student-details/student-details';

export const routes: Routes = [

   {
    path:'', component:StudentLoginForm
   },
   {
     path:'student-register', component:StudentRegistrationForm
   },
   {
    path:'student-details', component:StudentDetails
   }
    
];
