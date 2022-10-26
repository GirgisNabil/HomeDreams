const mongoose = require("mongoose");
//--------------------------------------------------------------------------------

//Database schema

const studentSchemaa = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    trim: true,
  },
  dept: {
    type: String,
    required: true,
    default: "SD",
    enum: ["SD", "SA", "MD"],
  },
  id: { type: Number, unique: true, required: true },
});

//--------------------------------------------------------------------------------

//Database model

const Student = mongoose.model("Students", studentSchemaa);

//--------------------------------------------------------------------------------

//Fetcheing Students model

// Student.find({}).then((data) => {
//   console.log(data);
// });

// async function getAllStudents() {
//   let result = await Student.find();
//   console.log(result);
// }
// getAllStudents();

//--------------------------------------------------------------------------------

//Saving Students model

module.exports = Student;
