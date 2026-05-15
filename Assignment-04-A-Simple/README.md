# Assignment-04-A Simple

## Problem Statement

Create a simple mobile website using jQuery Mobile.

## Aim

To create a mobile-friendly website using jQuery Mobile components.

## Files

- `index.html` contains the mobile website.
- `style.css` contains small custom CSS.

## jQuery Mobile Concepts Used

- `data-role="page"` for mobile pages.
- `data-role="header"` for page header.
- `role="main"` and `ui-content` for main content.
- `data-role="footer"` for footer.
- `data-role="listview"` for mobile list.
- `ui-btn` classes for mobile buttons.

## Pages

- Home
- About
- Services
- Contact

## How To Run

Open `index.html` in a browser.

## How To Run In VS Code

1. Open VS Code.
2. Open the folder `Assignment-04-A-Simple`.
3. Open `index.html`.
4. Right-click and select **Open with Live Server**.

If Live Server is not installed, open `index.html` directly in a browser.

Internet should be on because jQuery and jQuery Mobile are loaded using CDN links.

## Common Problems And Solutions

### Problem 1: Page opens without mobile styling

Reason:

jQuery Mobile CDN files may not have loaded.

Solution:

Check internet connection and reload the page.

### Problem 2: Links do not navigate between pages

Reason:

jQuery Mobile script may not have loaded.

Solution:

Make sure these scripts are present in `index.html`:

```html
<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
```

### Problem 3: Do we need npm install?

No. This assignment uses CDN links, so no `npm install` is required.

### Problem 4: Can it run by double-clicking index.html?

Yes. It can run by directly opening `index.html`, but Live Server is better for showing it in VS Code.

## Viva Questions

### 1. What is jQuery Mobile?

jQuery Mobile is a framework used to create mobile-friendly and touch-friendly websites.

### 2. What is the aim of this project?

To create a simple mobile website using jQuery Mobile components.

### 3. What is `data-role="page"`?

It defines a mobile page in jQuery Mobile.

### 4. What is `data-role="header"`?

It creates a mobile-style header for the page.

### 5. What is `ui-content`?

`ui-content` is used for the main content area of a jQuery Mobile page.

### 6. What is `data-role="footer"`?

It creates a mobile-style footer for the page.

### 7. What is `data-role="listview"`?

It creates a mobile-friendly list.

### 8. What is `ui-btn`?

`ui-btn` is a jQuery Mobile class used to create touch-friendly buttons.

### 9. How many pages are created in this project?

Four pages are created: Home, About, Services and Contact.

### 10. How does navigation work in this project?

Navigation works using internal links like `#about`, `#services` and `#contact`.

### 11. Why is jQuery included before jQuery Mobile?

jQuery Mobile depends on jQuery, so jQuery must be loaded first.

### 12. What does the contact form do?

The contact form shows an alert message after form submission.

## Conclusion

This assignment creates a simple mobile website with multiple pages and touch-friendly UI using jQuery Mobile.
