const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const EmployeeSchema = new Schema({
  firstName: { type: String, required: true, min: 4, max: 25 },
  LastName: { type: String, required: true, unique: true, max: 25 },
  email: { type: String, required: true },
  phone: { type: Number, requird: true, unique: true, max: 12 },
  Town: { type: String, required: true, unique: false },
  Adress: { type: String, required: true, unique: false },
  CNI: { type: String, required: true, unique: true },
});
const Employee = model("Employee", EmployeeSchema);
module.exports = Employee;
