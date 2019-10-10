// bring in express
const express = require("express");
// create router variable which is the result of Express router
const router = express.Router();
// bring in a function called sign up from the  handlers
// - nice way to abstract routes into indiidual files so that everything is not in index
// doing the destructuring right on this line , pulling the sighum function out of the auth.js in handlers
const { signup } = require("../handlers/auth");

//if there is a post request to / signup run the signup function
router.post("/signup", signup);

module.exports = router;

// the functions themselves will live in the handlers folder, the routes will all live if the routes folder.
