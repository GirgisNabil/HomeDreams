const User = require("../models/userModel");
const hasher = require("bcrypt");

let Register = async (req, res) => {
  let final = await User.findOne({ email: req.body.email }).exec();

  if (final) {
    res.send(`Student with email ${req.body.email} already registerd`);
  } else {
    let salt = await hasher.genSalt(10);
    let hashedpassword = await hasher.hash(req.body.password, salt);
    result = new User({
      email: req.body.email,
      password: hashedpassword,
    });
    await result.save();
    const token = result.genJWT();
    res.header("x-auth-token", token);
    res.send("saveddd hailolya  ");
  }
};

module.exports = { Register };
