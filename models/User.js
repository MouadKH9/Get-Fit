const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  info: {
    googleID: String,
    username: String,
    email: String,
    age: Number,
    gender: String,
    image: String,
    goal: Number,
    rate: Number
  },
  data: {
    type: Object,
    default: {}
  }
});

mongoose.model("users", userSchema);
