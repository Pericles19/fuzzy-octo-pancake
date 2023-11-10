const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");

const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const secret = "ilghugfd5s6878d78d7s8d67s8sd";
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

mongoose.connect(
  "mongodb+srv://mbellakemtio:xZnYKnHjpcejJnYo@cluster0.wvt3qfs.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  console.log(req.body);
  const { userName, email, password } = req.body;
  try {
    const userDoc = await User.create({
      userName,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});
app.post("/login", async (req, res) => {
  consol.log(req.body);
  const { userName, password } = req.body;
  const userDoc = await User.findOne({ userName });
  res.json(userDoc);
  const passOk = bcrypt.compareSync(password, userDoc.password);
  res.json(passOk);
  if (passOk) {
    jwt.sign({ userName, id: userDoc, _id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json("ok");
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.listen(4000, () => console.log("server listening on port 4000"));
