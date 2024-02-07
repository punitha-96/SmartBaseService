"use strict";

const express = require("express");
const limiter = require("./rateLimiter"); // Import the rate limiter middleware

const app = express();

// Use the rate limiter middleware
app.use(limiter);

// Your other routes and middleware
app.get("/", (req, res) => {
  res.send("Hello, this is the root path!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
