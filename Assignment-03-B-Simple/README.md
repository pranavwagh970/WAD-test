# Assignment-03-B Simple

## Problem Statement

Create four APIs using Node.js, Express.js and MongoDB for CRUD operations.

## Aim

To create REST APIs for Create, Read, Update and Delete operations using Node.js, Express.js and MongoDB.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Files

- `server.js` starts the Express server and connects to MongoDB.
- `models/User.js` defines the MongoDB user schema.
- `routes/userRoutes.js` contains the four CRUD APIs.
- `package.json` contains project dependencies and start command.

## Four CRUD APIs

### 1. Create User

Method: `POST`

URL:

```text
http://localhost:5000/api/users
```

Body:

```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "9876543210",
  "city": "Mumbai"
}
```

### 2. Read Users

Method: `GET`

URL:

```text
http://localhost:5000/api/users
```

### 3. Update User

Method: `PUT`

URL:

```text
http://localhost:5000/api/users/USER_ID
```

Body:

```json
{
  "city": "Pune"
}
```

### 4. Delete User

Method: `DELETE`

URL:

```text
http://localhost:5000/api/users/USER_ID
```

## How To Run

Install packages:

```bash
npm.cmd install
```

Start MongoDB on your system.

Start server:

```bash
npm.cmd start
```

Server URL:

```text
http://localhost:5000
```

Expected output:

```text
MongoDB connected
Server running at http://localhost:5000
```

## How To Run In VS Code

1. Start MongoDB service on your PC.
2. Open VS Code.
3. Open the folder `Assignment-03-B-Simple`.
4. Open terminal.
5. Run:

```bash
npm.cmd install
npm.cmd start
```

6. Keep the terminal running.
7. Test APIs using Thunder Client or Postman.

## Common Problems And Solutions

### Problem 1: MongoDB connection failed

Error:

```text
MongoDB connection failed: connect ECONNREFUSED 127.0.0.1:27017
```

Reason:

MongoDB is not installed or MongoDB service is not running.

Solution:

1. Install MongoDB Community Server.
2. During installation, select **Complete** setup.
3. Keep **Install MongoD as a Service** checked.
4. Use **Run service as Network Service user**.
5. After installation, run the project again:

```bash
npm.cmd start
```

### Problem 2: MongoDB Compass installation is stuck

MongoDB Compass is only a GUI tool. The API does not require Compass.

Solution:

If Compass installation takes too long, cancel and install only MongoDB Server. The project needs MongoDB server running on:

```text
127.0.0.1:27017
```

### Problem 3: Do we need Postman?

Postman is not compulsory. You can use **Thunder Client** inside VS Code.

Browser can test only GET API easily. For POST, PUT and DELETE, use Thunder Client or Postman.

### Problem 4: `npm` is blocked in PowerShell

Use:

```bash
npm.cmd install
npm.cmd start
```

instead of:

```bash
npm install
npm start
```

### Problem 5: What should be shared with friends?

Do not share `node_modules`.

Share `package.json`, then your friends should run:

```bash
npm.cmd install
```

## Conclusion

This assignment creates four REST APIs using Node.js, Express.js and MongoDB to perform CRUD operations on user data.



Great. Now use **Thunder Client** for Assignment 3-B.

Keep your server running:

```text
MongoDB connected
Server running at http://localhost:5000
```

**1. Open Thunder Client**

In VS Code left sidebar, click **Thunder Client** icon.

Click:

```text
New Request
```

---

**2. Test GET API**

Method:

```text
GET
```

URL:

```text
http://localhost:5000/api/users
```

Click **Send**.

You should see:

```json
[]
```

or saved users.

---

**3. Test POST API**

Click **New Request**.

Method:

```text
POST
```

URL:

```text
http://localhost:5000/api/users
```

Go to **Body** tab.

Choose:

```text
JSON
```

Paste:

```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "9876543210",
  "city": "Mumbai"
}
```

Click **Send**.

You will get response with `_id`.

Copy that `_id`.

---

**4. Test PUT API**

Click **New Request**.

Method:

```text
PUT
```

URL:

```text
http://localhost:5000/api/users/PASTE_ID_HERE
```

Body > JSON:

```json
{
  "city": "Pune"
}
```

Click **Send**.

---

**5. Test DELETE API**

Click **New Request**.

Method:

```text
DELETE
```

URL:

```text
http://localhost:5000/api/users/PASTE_ID_HERE
```

Click **Send**.

That completes all four CRUD APIs.

## Viva Questions

### 1. What is CRUD?

CRUD means Create, Read, Update and Delete.

### 2. What is Node.js?

Node.js is a JavaScript runtime used to run JavaScript on the server side.

### 3. What is Express.js?

Express.js is a Node.js framework used to create web servers and APIs easily.

### 4. What is MongoDB?

MongoDB is a NoSQL database that stores data in document format.

### 5. What is Mongoose?

Mongoose is a library used to connect Node.js with MongoDB and define schemas.

### 6. What is the use of `server.js`?

`server.js` starts the Express server, connects to MongoDB and connects the routes.

### 7. What is the use of `models/User.js`?

It defines the structure of user data using a Mongoose schema.

### 8. What is the use of `routes/userRoutes.js`?

It contains the four API routes: POST, GET, PUT and DELETE.

### 9. Which API is used to create user?

`POST http://localhost:5000/api/users`

### 10. Which API is used to read users?

`GET http://localhost:5000/api/users`

### 11. Which API is used to update user?

`PUT http://localhost:5000/api/users/USER_ID`

### 12. Which API is used to delete user?

`DELETE http://localhost:5000/api/users/USER_ID`

### 13. Why is `express.json()` used?

It allows Express to read JSON data sent in the request body.

### 14. Why is Thunder Client used?

Thunder Client is used to test APIs inside VS Code.
