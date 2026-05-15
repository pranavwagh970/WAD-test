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
npm install
```

Start MongoDB on your system.

Start server:

```bash
npm start
```

Server URL:

```text
http://localhost:5000
```

## Conclusion

This assignment creates four REST APIs using Node.js, Express.js and MongoDB to perform CRUD operations on user data.
