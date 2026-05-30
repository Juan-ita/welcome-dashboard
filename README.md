#  Interactive Personalized Dashboard

A clean, responsive web application that takes user inputs (Name and Age), processes the data using JavaScript and displays a personalized dashboard. The project uses standard HTML5, a custom CSS stylesheet  and LocalStorage to remember the user.

##  Live Preview
The app includes a welcome form that instantly reveals a custom dashboard panel once the user submits their information.

---

##  Features Implemented

* **Data Persistence (`localStorage`):** The app saves the user's name (`userName`) and age (`userAge`) inside the browser's memory. This means the dashboard stays visible even if you refresh the page.
* **Custom Stylesheet (`style.css`):** Built entirely with standard CSS layout rules. It features a diagonal background gradient, rounded content cards, clean input spacing, and responsive padding.
* **Conditional Message Box:** Checks the user's age using an `if...else` statement. If the user is 18 or older, it displays a green "Access Granted" box; otherwise, it displays a red "Access Restricted" box.
* **Dynamic Quote Loop:** Uses a JavaScript `for` loop to cycle through an array of motivational quotes and injects them as list items (`<li>`) into the dashboard.
* **Wipe Data Feature:** Includes a functioning "Clear" button that deletes the data from `localStorage` and hides the dashboard instantly.

---

##  Project Architecture

```text
├── index.html       # Webpage structure and HTML layout
├── style.css        # Custom styles, layout margins, and background colors
└── about.js         # Core JavaScript logic, loops, and storage handlers