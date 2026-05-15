# Assignment-02-C Simple

## Problem Statement

Create an Angular application which performs the following actions:

- Register User
- Login User
- Show User Data on Profile Component

## Aim

To create a simple Angular application using components, routing, forms and service.

## Project Flow

1. User enters details in the Register component.
2. Data is saved in local storage using `UserService`.
3. User logs in using username and password.
4. If login is successful, the Profile component displays user data.

## Components

- `RegisterComponent` collects user registration data.
- `LoginComponent` checks username and password.
- `ProfileComponent` displays the logged-in user's data.

## Service

`UserService` contains the main logic:

- `registerUser()` saves user data.
- `loginUser()` validates login details.
- `getCurrentUser()` returns the logged-in user.

## Important Angular Concepts Used

- Components
- Routing
- FormsModule
- `ngModel`
- Service
- Dependency Injection
- Local Storage

## How To Run

Install dependencies:

```bash
npm.cmd install
```

Start Angular server:

```bash
npm.cmd start
```

Open:

```text
http://localhost:4200
```

## Conclusion

This Angular application demonstrates user registration, login and profile display using separate components and a shared service.


## How To Run In VS Code

1. Open VS Code.
2. Open the folder `Assignment-02-C-Simple`.
3. Open terminal.
4. Run:

```bash
npm.cmd install
npm.cmd start
```

5. Open `http://localhost:4200` in the browser.
6. Register a user.
7. Login with the same username and password.
8. Check the Profile page.

## Common Problems And Solutions

### Problem 1: `npm` is blocked in PowerShell

Error:

```text
npm.ps1 cannot be loaded because running scripts is disabled
```

Solution:

Use `npm.cmd` instead of `npm`:

```bash
npm.cmd install
npm.cmd start
```

### Problem 2: Missing module error

Error:

```text
Cannot find module 'is-fullwidth-code-point'
```

Reason:

`node_modules` is incomplete or corrupted.

Solution:

Delete `node_modules` and reinstall:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm.cmd install
npm.cmd start
```

If `package-lock.json` is not present, ignore that error and continue.

### Problem 3: Too many files in Angular project

Angular creates many setup files automatically. For viva, explain only the main files:

- `app.module.ts`
- `app-routing.module.ts`
- `app.component.html`
- `user.model.ts`
- `user.service.ts`
- Register component files
- Login component files
- Profile component files

### Problem 4: Should `node_modules` be shared?

No. `node_modules` should not be shared or pushed to GitHub.

It is recreated using:

```bash
npm.cmd install
```



**Important Files**

**1. `app.module.ts`**

This is the main module of the Angular application. It connects all required parts of the app.

In this file, we import Angular modules like:

```ts
BrowserModule
FormsModule
AppRoutingModule
```

`BrowserModule` allows the app to run in the browser.

`FormsModule` is used for form handling and two-way binding using `[(ngModel)]`.

`AppRoutingModule` is used for navigation between Register, Login, and Profile pages.

It also declares all components:

```ts
RegisterComponent
LoginComponent
ProfileComponent
```

So this file tells Angular which components and modules are used in the project.

---

**2. `app-routing.module.ts`**

This file handles routing/navigation.

Routes are:

```text
/register
/login
/profile
```

When user opens `/register`, Angular shows RegisterComponent.

When user opens `/login`, Angular shows LoginComponent.

When user opens `/profile`, Angular shows ProfileComponent.

The empty route redirects to register page:

```ts
{ path: '', redirectTo: 'register', pathMatch: 'full' }
```

So this file controls which page opens for which URL.

---

**3. `app.component.html`**

This is the main layout file.

It contains the navbar with three links:

```text
Register
Login
Profile
```

It also contains:

```html
<router-outlet></router-outlet>
```

`router-outlet` is the place where Angular displays the selected component.

For example:
- If route is `/register`, RegisterComponent is shown inside `router-outlet`.
- If route is `/login`, LoginComponent is shown inside `router-outlet`.

---

**4. `user.model.ts`**

This file defines the structure of user data.

It contains an interface called `User`.

The user has fields:

```text
name
email
phone
city
username
password
```

This helps TypeScript understand what data a user object should contain.

Example:

```ts
export interface User {
  name: string;
  email: string;
  phone: string;
  city: string;
  username: string;
  password: string;
}
```

---

**5. `user.service.ts`**

This is the most important logic file.

It stores and manages user data.

It uses browser `localStorage`.

Main functions:

```ts
getUsers()
```

This reads all registered users from localStorage.

```ts
registerUser(user)
```

This takes new user data and saves it into localStorage.

```ts
loginUser(username, password)
```

This checks whether the entered username and password match any registered user.

If login is successful, it saves that user as current logged-in user.

```ts
getCurrentUser()
```

This returns the currently logged-in user so that ProfileComponent can display the data.

Simple explanation:

> user.service.ts works as a common data handling file for register, login and profile components.

---

**6. `register.component.html`**

This file contains the registration form UI.

It has input fields for:

```text
Name
Email
Phone
City
Username
Password
```

It uses:

```html
[(ngModel)]
```

Example:

```html
<input name="name" [(ngModel)]="user.name">
```

This connects the input field with the `user` object in `register.component.ts`.

When user submits the form, it calls:

```html
(ngSubmit)="register()"
```

---

**7. `register.component.ts`**

This file contains registration logic.

It creates a `user` object with empty fields.

When Register button is clicked, the `register()` function runs.

Inside `register()`:

```ts
this.userService.registerUser(this.user);
```

This sends user data to `UserService`.

Then:

```ts
this.router.navigate(['/login']);
```

This redirects the user to Login page.

Simple explanation:

> register.component.ts collects form data, saves it using UserService, and redirects to Login page.

---

**8. `login.component.html`**

This file contains the login form UI.

It has:
- username input
- password input
- login button
- error message area

It uses `[(ngModel)]` to connect input values with TypeScript variables:

```ts
username
password
```

When form is submitted, it calls:

```html
(ngSubmit)="login()"
```

---

**9. `login.component.ts`**

This file contains login logic.

When user clicks Login, the `login()` function runs.

It calls:

```ts
this.userService.loginUser(this.username, this.password);
```

If username and password are correct:

```ts
this.router.navigate(['/profile']);
```

So user goes to Profile page.

If login is wrong:

```ts
this.errorMessage = 'Invalid username or password.';
```

Simple explanation:

> login.component.ts validates user login and redirects to Profile page after successful login.

---

**10. `profile.component.html`**

This file displays logged-in user data.

It shows data in a table:

```text
Name
Email
Phone
City
Username
```

It uses interpolation:

```html
{{ user.name }}
{{ user.email }}
```

Interpolation displays TypeScript data inside HTML.

---

**11. `profile.component.ts`**

This file gets logged-in user data.

When Profile page opens, `ngOnInit()` runs automatically.

It calls:

```ts
this.userService.getCurrentUser();
```

If user data exists, it displays it.

If no user is logged in, it redirects to Login page:

```ts
this.router.navigate(['/login']);
```

Simple explanation:

> profile.component.ts loads current user data and prevents profile page from opening without login.

---

**Auto / Configuration Files**

**1. `package.json`**

Contains project name, commands, and dependencies.

Example commands:

```bash
npm start
npm install
```

It lists Angular packages required to run the project.

**2. `angular.json`**

Angular project configuration file.

It tells Angular how to build and serve the project.

**3. `tsconfig.json` and `tsconfig.app.json`**

TypeScript configuration files.

They tell Angular how TypeScript code should be compiled into JavaScript.

**4. `src/main.ts`**

Starting point of Angular app.

It loads `AppModule`.

Usually not changed much.

**5. `src/index.html`**

Main HTML page.

It contains:

```html
<app-root></app-root>
```

Angular app loads inside this tag.

**6. `src/styles.css`**

Global CSS file.

Common styles for the whole application can be written here.

**7. `node_modules`**

This folder is created by:

```bash
npm install
```

It contains all Angular packages and dependencies.

You do not explain or edit this folder.

## Viva Questions

### 1. What is Angular?

Angular is a front-end framework used to build single page web applications.

### 2. What is a component?

A component is a part of the UI. It contains HTML, CSS and TypeScript logic.

### 3. Which components are used in this project?

The project uses `RegisterComponent`, `LoginComponent` and `ProfileComponent`.

### 4. What is routing?

Routing is used to navigate between different components without reloading the full page.

### 5. What is `router-outlet`?

`router-outlet` is the place where Angular displays the component selected by the route.

### 6. What is `FormsModule`?

`FormsModule` is used for template-driven forms and `[(ngModel)]`.

### 7. What is `ngModel`?

`ngModel` connects form input values with TypeScript variables.

### 8. What is a service?

A service is used to keep common logic and share data between components.

### 9. Why is `UserService` used?

`UserService` is used to register users, validate login and return current user data.

### 10. What is localStorage?

localStorage is browser storage used to save data even after page refresh.

### 11. How does login work?

The username and password entered by the user are compared with the users stored in localStorage.

### 12. What happens after successful login?

The user is redirected to the Profile component, where user data is displayed.

### 13. What is `package.json`?

`package.json` stores project commands and dependencies required by the Angular project.

### 14. What is `node_modules`?

`node_modules` contains installed npm packages. It is generated by `npm install` and should not be explained in detail.
