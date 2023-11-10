const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  userName: { type: String, required: true, min: 4, max: 25 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 4 },
  isActive: { type: Boolean, default: false },
});
const userModel = model("User", UserSchema);
module.exports = userModel;
