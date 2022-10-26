const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (val) => {
        return /.+\@.+\..+/.test(val);
      },
    },
  },

  password: { type: String, required: true, minLength: 5, maxLength: 100 },
});
// userSchema.methods.changedName = function () {
//   return this.name + "TROLOLO";
// };

userSchema.methods.genJWT = function () {
  const token = jwt.sign({ userid: this._id }, "thisissecretkey");
  return token;
};

const User = mongoose.model("admins", userSchema);
module.exports = User;
