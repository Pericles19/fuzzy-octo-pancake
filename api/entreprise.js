const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Enterprise = require("./models/User");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://mbellakemtio:xZnYKnHjpcejJnYo@cluster0.wvt3qfs.mongodb.net/?retryWrites=true&w=majority"
);
app.post("/entreprise", async (req, res) => {
  consol.log(req.body);
  const { domain, email, town, name, number, street, password, passwordV } =
    req.body;
  try {
    const EnterpriseDoc = await Enterprise.create({
      domain,
      email,
      town,
      name,
      number,
      street,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(EnterpriseDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});
app.listen(4000, () => console.log("server listening on port 4000"));
