const validator = require("../utils/authValidation");

module.exports = (req, res, next) => {
  let valid = validator(req.body);
  if (valid) {
    req.valid = 1;
    next();
  } else {
    console.log(valid);
    res.status(403).send("forbbiden command");
  }
};
