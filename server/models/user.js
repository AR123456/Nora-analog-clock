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
    required: true
  },
  profileImageUrl: {
    type: String
  }
});
// before we save this users password in the datablse it needs to be modifided
// adding a hook here ( before the save)- so that we can modify the plain text password with hashing
// the hook is  pre save  run this function before the save- this is an aysnc fucntion so we can wait for hashed to come back before saving
userSchema.pre("save", async function(next) {
  // try catch to handle errors
  try {
    // if hte password has not been changed dont has it again
    if (!this.isModified("password")) {
      return next();
    }
    // has the password - the 10 here is the salt ( so badguys cannot determine teh bcrypt for the same password used by different people)
    let hashedPassword = await bcrypt.hash(this.password, 10);
    // set the passsword to the hashed and salted password
    this.password = hashedPassword;
    return next();
  } catch (err) {
    // pass the error to the error handler
    return next(err);
  }
});

// creating a function to help the end user - an instace method, every document created from this model has this
// takes in the password from the form
userSchema.method.comparePassword = async function(candidatePassword, next) {
  //handel error with try catch
  try {
    // wait for compare to happen
    let isMatch = await bcrypt.compare(candidatePassword, this.password);
    // tell routes if isMatch is true you have logged in succesfully
    return isMatch;
  } catch (err) {
    // have not logged in succesfully
    return next(err);
  }
};

// every object made from schema is going to be done through a model , so make a new model
// create a new with a capital , the first param is what we want to refereance that model as
// the second param is the schema we created it with
const User = mongoose.model("User", userSchema);

//export the user - note it is a capial U  User
module.exports = User;
