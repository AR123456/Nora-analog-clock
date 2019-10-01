// this will refer to user model
// bring in monoose
const mongoose = require("mongoose");
// bring in bcrypt
const bcrypt = require("bcrypt");
// make the user schema
// a new mongoose Schema specify the fields each document should have
const userSchema = new mongoose.Schema({
  // unique emails -
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  profileImageUrl: {
    type: String
  }
});

// every object made from schema is going to be done through a model , so make a new model
// create a new with a capital , the first param is what we want to refereance that model as
// the second param is the schema we created it with
const User = mongoose.model("User", userSchema);

//export the user - note it is a capial U  User
module.exports = User;
