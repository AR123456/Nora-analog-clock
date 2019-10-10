// funcitons that will ve exported to routes
const db = require("../models/index");
// the jason web token will be used to determine if the user is logged in from page to page
const jwt = require("jsonwebtoken");

exports.signin = function() {};

exports.signup = async function(req, res, next) {
  try {
    // create a user
    let user = await db.User.create(req.body);
    // destructure so that we can shorten up what gets passed
    let { id, username, profileImageUrl } = user;
    //create a token -(signing a token)
    let token = jwt.sign(
      {
        ///passin the payload object- values passed to token so when decoded I will have access to these
        id,
        username,
        profileImageUrl
      },
      // proces.env.____  pass in the secret key
      process.env.SECRET_KEY
    );
    // return status 200, everything is ok and the json object
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token
    });
  } catch (err) {
    // if the validation fails
    if (err.code === 11000) {
      // see what kind of error
      // if it is a certain  error respone wiht username/emailaleady taken
      err.message = "Sorry, that username and/or email is taken";
    }
    return next({
      status: 400,
      message: err.message
    });
    // otherwise  just send back a 400
  }
};
