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

## Conclusion

This assignment demonstrates how Node.js can be used to serve a static website using HTML and CSS files.
