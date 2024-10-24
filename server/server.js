const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle form submission
app.post("/submit", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Simple authentication logic (for demonstration purposes)
  if (username === "admin" && password === "password") {
    res.send("Login successful!");
  } else {
    console.error("Update Code: Invalid username or password.");
    res.send("Invalid username or password.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
