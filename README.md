# Note Taker App
 A simple note-taking application built with Node.js and Express. This application allows users to
 write, save, and delete notes.
 ## Features- Write and save notes.- View saved notes.- Delete notes.
 ## Demo
 ![note-taker](../NOTE-TAKER/img/note-taker.gif)  
*Preview of the functionality*
 ## Installation
 To get started with the Note Taker App, follow these steps:
 1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/note-taker-app.git
   cd note-taker-app
   ```
2. **Install dependencies**:
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```
 3. **Start the server**:
   Run the following command to start the server locally:
   ```bash
   npm start
   ```
   The application will be running at `http://localhost:3001`.
 ## Dependencies
 This project relies on the following Node.js packages:- [Express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web
 framework for Node.js- [Path](https://nodejs.org/api/path.html) - Provides utilities for working with file and directory paths- [FS (File System)](https://nodejs.org/api/fs.html) - A built-in Node.js module that provides an API
 for interacting with the file system
 ## Project Structure
```
 note-taker-app/
 ??? db/
 ?   ??? db.json
 ??? public/
 ?   ??? assets/
 ?   ?   ??? css/
 ?   ?   ?   ??? styles.css
 ?   ?   ??? js/
 ?   ?       ??? index.js
 ?   ??? index.html
 ?   ??? notes.html
 ??? .gitignore
 ??? package.json
 ??? README.md
 ??? server.js
 ```
 ## Deployment
 ### Deploying on Render
 1. **Connect your GitHub repository to Render**.
 2. **Create a new Web Service**.
 3. **Set the build command**:
   ```bash
   npm install
   ```
 4. **Set the start command**:
   ```bash
   npm start
   ```
 5. **Deploy**.
 ### Deploying on GitHub Pages (Front-End Only)
 1. **Build your front-end** by moving the necessary static files (`index.html`, `notes.html`, CSS, JS)
 to a `docs` folder.
 2. **Push your changes** to GitHub.
 3. **Enable GitHub Pages** in the repository settings.
 4. **Set the source** to the `docs` folder.