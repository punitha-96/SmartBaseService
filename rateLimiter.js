require("dotenv").config();

const rateLimit = require("express-rate-limit");

// Create the rate limiter middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.RATE_LIMIT_MAX,
  message: "Too many requests from this IP, please try again later.",
});

module.exports = limiter;
