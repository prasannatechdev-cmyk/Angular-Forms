# AngularTemplateDrivenForms

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.








# Angular 20 Student Forms Project

## 📌 Project Overview

This project is developed using Angular 20 and Template-Driven Forms. It includes student login, student registration, and student details components.

The application collects student information through the registration form, stores the data in `sessionStorage` using an Angular service, and displays the stored information in the Student Details component.

## 🚀 Features

- **Student Login Form:** Allows students to enter their login credentials.
- **Student Registration Form:** Collects student information through a registration form.
- **Form Validation:** Validates user inputs using HTML validation attributes and Angular form validation.
- **Data Storage:** Stores student information in browser `sessionStorage` through an Angular service.
- **Student Details:** Retrieves and displays the stored student information in a separate component.
- **Angular Service:** Uses `loginservice.ts` to manage and share data between components.
- **Component-Based Architecture:** Organizes the application into separate components for better maintainability.
- **Routing:** Supports navigation between components using Angular Router, if configured.

## 🛠️ Technologies Used

- Angular 20
- TypeScript
- HTML5
- CSS3
- Template-Driven Forms
- Angular `FormsModule`
- Angular Services
- Session Storage
- Angular Router 

## 📂 Project Structure

src/
└── app/
    ├── student-login-form/
    ├── student-registration-form/
    ├── student-details/
    ├── services/
    │   └── loginservice.ts
    ├── app.routes.ts
    └── app.component.ts


## 🔄 How the Application Works

1. **Student Login Form:** When the application opens, the Student Login Form is displayed first.
2. **Student Registration Form:** New students can navigate to the registration form and enter their details.
3. **Data Storage:** The registration data is stored in `sessionStorage` using the `loginservice.ts` service.
4. **Login Validation:** The login form validates the entered credentials against the registered student details.
5. **Student Details:** After successful login, the Student Details component displays the stored student information.


## ⚙️ Installation and Setup

### Prerequisites

- Node.js
- npm
- Angular CLI

### Steps to Run the Project

1. Clone the repository:

   git clone <your-github-repository-url>
 

2. Navigate to the project folder:

  
   cd <your-project-folder>
  

3. Install the dependencies:

   npm install
  
4. Start the development server:

   ng serve -o
  
5. Open the application in your browser and test the registration, login, and student details functionality.

## 🎯 Learning Outcomes

- Understanding Angular Template-Driven Forms.
- Working with `FormsModule` and `NgForm`.
- Implementing form validation.
- Creating and using Angular services.
- Sharing data between components using a service.
- Storing and retrieving data using `sessionStorage`.
- Displaying stored data in another component.
- Understanding component-based application development.

## 👨‍💻 Author

**Prasanna Shaganti**

B.Tech in Computer Science and Engineering | Frontend Development
