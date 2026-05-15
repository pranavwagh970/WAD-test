# Assignment-03-A Simple

## Problem Statement

Create a Node.js application which serves a static website.

## Aim

To create a simple Node.js server that serves static HTML and CSS files from a `public` folder.

## Files

- `server.js` contains the Node.js server code.
- `public/index.html` contains the static web page.
- `public/style.css` contains the page styling.
- `package.json` contains the start command.

## How It Works

1. Node.js creates a server using the built-in `http` module.
2. Static files are stored inside the `public` folder.
3. When the browser opens `/`, the server sends `index.html`.
4. The CSS file is also served from the same `public` folder.

## Commands

Run the project:

```bash
node server.js
```

Or:

```bash
npm start
```

Open in browser:

```text
http://localhost:3000
```

## How To Run In VS Code

1. Open VS Code.
2. Open the folder `Assignment-03-A-Simple`.
3. Open terminal.
4. Run:

```bash
node server.js
```

5. Keep the terminal open.
6. Open `http://localhost:3000` in the browser.
7. To stop the server, press `Ctrl + C` in the terminal.

## Common Problems And Solutions

### Problem 1: Wrong folder path

If `node server.js` says file not found, you are probably not inside the correct folder.

Solution:

```powershell
cd C:\Users\PRANAV\Downloads\vs\Assignment-03-A-Simple
node server.js
```

### Problem 2: Browser does not open website

Make sure the terminal shows:

```text
Server running at http://localhost:3000
```

Then open:

```text
http://localhost:3000
```

### Problem 3: Port already in use

If port `3000` is already used by another program, stop that program or change the `PORT` value in `server.js`.

### Problem 4: Do we need `npm install`?

No. This project uses built-in Node.js modules only:

- `http`
- `fs`
- `path`

So `npm install` is not required.

## Conclusion

This assignment demonstrates how Node.js can be used to serve a static website using HTML and CSS files.


For **Assignment 3-A**, teacher can ask these questions:

**Basic Questions**

1. What is Node.js?
   
   Node.js is a runtime environment that allows JavaScript to run outside the browser.

2. What is a static website?
   
   A static website contains fixed files like HTML, CSS, and JavaScript. The server sends these files directly to the browser.

3. What is the purpose of `server.js`?
   
   `server.js` creates the Node.js server and serves files from the `public` folder.

4. Why did you create a `public` folder?
   
   The `public` folder stores static files like `index.html` and `style.css`.

5. Which modules are used in this project?
   
   `http`, `fs`, and `path`.

**Code Questions**

6. What does `http` module do?
   
   It creates the web server.

7. What does `fs` module do?
   
   It reads files from the system.

8. What does `path` module do?
   
   It helps create correct file paths.

9. Why do we use `http.createServer()`?
   
   To create a server that handles browser requests and sends responses.

10. What is `PORT = 3000`?
   
   It means the server runs on port number 3000.

**Browser Questions**

11. What happens when we open `http://localhost:3000`?
   
   The browser sends a request to the Node.js server, and the server sends `index.html`.

12. What is localhost?
   
   Localhost means our own computer.

13. What happens if the requested file is not found?
   
   The server sends a 404 File Not Found response.

**Explanation Line**

> This project creates a simple Node.js server that reads static files from the public folder and sends them to the browser.

**Assignment 3-A Code Explanation**

Your main file is:

```text
server.js
```

**1. Import Modules**

```js
const http = require('http');
const fs = require('fs');
const path = require('path');
```

Explanation:

`http` is used to create the server.

`fs` is used to read files like `index.html` and `style.css`.

`path` is used to create correct file paths.

---

**2. Set Port and Public Folder**

```js
const PORT = 3000;
const publicFolder = path.join(__dirname, 'public');
```

Explanation:

`PORT = 3000` means server will run on port 3000.

`__dirname` gives the current folder path.

`path.join(__dirname, 'public')` creates path to the `public` folder.

---

**3. Define Content Types**

```js
const contentTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript'
};
```

Explanation:

This tells browser what type of file is being sent.

Example:
- `.html` means HTML file
- `.css` means CSS file
- `.js` means JavaScript file

Without correct content type, browser may not display files properly.

---

**4. Create Server**

```js
const server = http.createServer((req, res) => {
```

Explanation:

This creates the server.

`req` means request from browser.

`res` means response sent by server.

---

**5. Handle Home Page**

```js
const requestedFile = req.url === '/' ? 'index.html' : req.url;
```

Explanation:

If user opens:

```text
http://localhost:3000
```

then `req.url` is `/`.

So server sends:

```text
index.html
```

If user requests:

```text
/style.css
```

then server sends `style.css`.

---

**6. Create File Path**

```js
const filePath = path.join(publicFolder, requestedFile);
```

Explanation:

This creates full path of requested file.

Example:

```text
D:\WADL\Assignment-03-A-Simple\public\index.html
```

---

**7. Get File Extension**

```js
const extension = path.extname(filePath);
const contentType = contentTypes[extension] || 'text/plain';
```

Explanation:

`path.extname(filePath)` gets file extension like `.html` or `.css`.

Then content type is selected from `contentTypes`.

If extension is unknown, it uses:

```text
text/plain
```

---

**8. Read File**

```js
fs.readFile(filePath, (error, content) => {
```

Explanation:

This reads the requested file from the `public` folder.

If browser asks for `index.html`, Node reads `index.html`.

If browser asks for `style.css`, Node reads `style.css`.

---

**9. Error Handling**

```js
if (error) {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>404 - File Not Found</h1>');
  return;
}
```

Explanation:

If file is not found, server sends 404 error.

Example:

```text
http://localhost:3000/abc.html
```

If `abc.html` does not exist, browser shows:

```text
404 - File Not Found
```

---

**10. Send File Response**

```js
res.writeHead(200, { 'Content-Type': contentType });
res.end(content);
```

Explanation:

If file is found, server sends status `200`.

`200` means success.

Then it sends file content to browser.

---

**11. Start Server**

```js
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

Explanation:

This starts server on port 3000.

When server starts, it prints:

```text
Server running at http://localhost:3000
```

---

**Simple Flow**

1. Browser opens `localhost:3000`.
2. Request goes to Node.js server.
3. Server checks requested URL.
4. Server finds file inside `public` folder.
5. Server reads file using `fs`.
6. Server sends file to browser.
7. Browser displays webpage.

**One-Line Code Explanation**

> In this code, Node.js creates an HTTP server, reads requested static files from the public folder, and sends them to the browser with proper content type.
