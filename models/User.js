const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  first_name: {
    type: String,
    required: "Enter your first name"
  },
  last_name: {
    type: String,
    required: "Enter your last name"
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: "Enter your email"
  },
  password: {
    type: String,
    trim: true,
    required: "Enter your password"
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;