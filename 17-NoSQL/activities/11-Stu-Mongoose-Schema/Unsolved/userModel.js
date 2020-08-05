const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  username: {
    type: String,
    trim: true,
    required: "username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is required"
  },
  email: {
    type: String,
    trim: true,
    required: "email is required"
  },
  userCreated: {
    type: Date,
    default: Date.now

  }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
