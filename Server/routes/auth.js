const express = require("express");
const router = express.Router();
const validator = require("../middlewares/authMWValidator");
const userModel = require("../models/userModel");
const hasher = require("bcrypt");

router.post("/", validator, async (req, res) => {
  //check email
  let user = await userModel.findOne({ email: req.body.email }).exec();
  if (!user) res.send({ accsess: false });
  // check password
  let passValidator = await hasher.compare(req.body.password, user.password);
  if (!passValidator) return res.send({ accsess: false });

  const token = user.genJWT();
  res.header("x-auth-token", token);
  res.send({
    accsess: true,
    email: user.email,
    password: user.password,
    token: token,
  });
});

module.exports = router;
