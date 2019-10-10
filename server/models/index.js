// connect to mongo db and set up mongoose
// standared boiler plate  m
// mongoose is our ODM - a wrapper on top of Mong that allows us to make queries a little bit more efficently
const mongoose = require("mongoose");
// use the set function and pass in debug of true - this is so that we can see the actual Mongo queries that are being run in terminal
mongoose.set("debug", true);
// specify which promise library to use - in this case the native JS  2015 promises os no call back pattern is needed
// we will be usedin 2017 async functions so make sure our mongo promises are working
mongoose.Promise = Promise;
// connect to the DB
mongoose.connect("mongodb://localhost/warbler", {
  //keep the connection stable and avoid mongo warnings
  keepAlive: true
  // useMongoClient: true
});

// this is bundeling  - export out a property on what is send from index called user

module.exports.User = require("./user");
