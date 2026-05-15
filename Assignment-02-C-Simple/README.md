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
npm install
```

Start Angular server:

```bash
npm start
```

Open:

```text
http://localhost:4200
```

## Conclusion

This Angular application demonstrates user registration, login and profile display using separate components and a shared service.
