const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const EnterpriseSchema = new Schema({
  domain: { type: String, required: true, min: 4, max: 25 },
  email: { type: String, required: true, unique: true },
  town: { type: String, required: true, min: 4 },
  name: { type: String, required: true, min: 4 },
  number: { type: Number, required: true, min: 12 },
  street: { type: String, required: true, min: 4 },
  password: { type: String, required: true, min: 4 },
});
const EnterpriseModel = model("User", EnterpriseSchema);
module.exports = EnterpriseModel;
