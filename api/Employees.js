const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Enterprise = require("./models/Enterprise");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://mbellakemtio:xZnYKnHjpcejJnYo@cluster0.wvt3qfs.mongodb.net/?retryWrites=true&w=majority"
);
app.post("/Employees", async (req, res) => {
  consol.log(req.body);
  const { fistName, lastName, email, phone, town, adress, cni } = req.body;
  try {
    const EmployeeDoc = await Enterprise.create({
      fistName,
      lastName,
      email,
      phone,
      town,
      adress,
      cni,
    });
    res.json(EmployeeDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});
app.listen(4050, () => console.log("server listening on port 4050"));
