import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// import { Connection } from "mongoose";
// import { connect } from "http2";
dotenv.config();

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

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
