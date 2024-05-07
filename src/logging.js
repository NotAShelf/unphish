const axios = require("axios");

// Middleware for logging incoming requests
function logIncomingRequests(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

// Middleware for logging outgoing requests
axios.interceptors.request.use((config) => {
  console.log(
    `[Outgoing Request] ${config.method.toUpperCase()} ${config.url}`,
  );
  return config;
});

axios.interceptors.response.use(
  (response) => {
    console.log(
      `[Response] ${response.status} ${response.config.method.toUpperCase()} ${response.config.url}`,
    );
    return response;
  },
  (error) => {
    console.error("Error:", error);
    return Promise.reject(error);
  },
);

// Error handling middleware
function errorHandler(err, req, res, next) {
  console.error("Error:", err);
  res.status(500).send("Internal Server Error");
}

module.exports = { logIncomingRequests, errorHandler };
