import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentRegistrationForm } from './student-registration-form/student-registration-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,StudentRegistrationForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-template-driven-forms');



}
