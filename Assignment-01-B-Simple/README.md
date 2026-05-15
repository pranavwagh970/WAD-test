# Assignment-01-B Simple

## Problem Statement

Write a JavaScript program to get the user registration data and push it to an array/local storage with AJAX POST method and show the data list on a new page.

## What This Project Contains

- A user registration form.
- JavaScript code to collect form data.
- AJAX POST request using `XMLHttpRequest`.
- User data stored in a local storage array.
- A separate `users.html` page to display registered users.

## Files

- `index.html` contains the registration form.
- `users.html` displays the registered user list.
- `js/register.js` handles form submit, AJAX POST and local storage.
- `js/users.js` reads local storage and displays users.
- `css/style.css` contains simple styling.

## How To Run

Open `index.html` in a browser, fill the form and click Register.

## How To Run In VS Code

1. Open VS Code.
2. Open the folder `Assignment-01-B-Simple`.
3. Open `index.html`.
4. Right-click and select **Open with Live Server**.
5. Fill the registration form and click **Register**.
6. The page redirects to `users.html`, where registered users are displayed.

## Project Flow

1. User enters registration details.
2. JavaScript collects the form data.
3. AJAX `POST` request sends the data to a demo API.
4. User data is stored in browser localStorage.
5. `users.html` reads localStorage and displays the data in a table.

## Viva Questions

### 1. What is the aim of this assignment?

To collect user registration data using JavaScript, send it using AJAX POST and store/display it using localStorage.

### 2. What is AJAX?

AJAX means Asynchronous JavaScript and XML. It allows a web page to send or receive data from a server without refreshing the page.

### 3. Which AJAX method is used in this project?

The project uses `XMLHttpRequest` with the `POST` method.

### 4. What is the use of POST method?

POST is used to send data from the client side to a server or API.

### 5. What is localStorage?

localStorage is browser storage used to save data in key-value format. The data remains stored even after refreshing the page.

### 6. Why is JSON used?

JSON is used to convert JavaScript objects into string format before storing or sending data.

### 7. Which files contain the main logic?

`js/register.js` handles form submission, AJAX POST and localStorage. `js/users.js` displays stored user data.

### 8. Why is `users.html` used?

`users.html` is a separate page used to display the registered user list.

### 9. What does `event.preventDefault()` do?

It stops the form from refreshing the page after submit, so JavaScript can handle the data manually.

### 10. What happens after successful registration?

The user data is saved in localStorage and the page redirects to `users.html`.
