// required enviroment vars
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
// useing the routes ( which use the handlers)
const authRoutes = require("./routes/auth");
const db = require("./models");

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

/// routes will go here
// if there is ever any request that starts with /api/auth go and use the routes in routes/auth
// have prefixed routes with /api/
app.use("/api/auth", authRoutes);

// this will handle 404 errors
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});
// this is the app . use for the incoming middle ware error handler
app.use(errorHandler);
// start the server
app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});

console.log("Trying to log the secret key   ", process.env.SECRET_KEY);
