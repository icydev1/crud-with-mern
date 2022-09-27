const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  job: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  hobbies: {
    type: String,
    required: true,
  },
  favdish: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const users = new mongoose.model("users", userSchema);

module.exports = users;