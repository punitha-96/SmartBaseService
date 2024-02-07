const HttpStatus = {
  OK: {
    code: 200,
    text: "OK",
  },
  CREATED: {
    code: 201,
    text: "Created",
  },
  NOT_FOUND: {
    code: 404,
    text: "Not Found",
  },
  TOO_MANY_REQUESTS: {
    code: 429,
    text: "Too Many Requests",
  },
  // Add more status codes as needed
};

module.exports = { HttpStatus };
