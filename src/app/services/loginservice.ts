import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Loginservice {


 signupdetails: any = JSON.parse(
    sessionStorage.getItem('signupdetails') || '{}'
  );

  logindetails: any = JSON.parse(
    sessionStorage.getItem('logindetails') || '{}'
  );


  
}
