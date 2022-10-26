const validator = require("../utils/usersValidator");

module.exports = (req, res, next) => {
  let valid = validator(req.body);
  if (valid) {
    req.valid = 1;
    next();
  } else {
    console.log(valid);
    res.send({ accsess: false });
  }
};
