const studentDB = require("../models/studentModelDB");

let addNewStudent = (req, res) => {
  let newStudent = new studentDB({
    name: req.body.name,
    dept: req.body.dept,
    id: req.body.id,
  });

  newStudent
    .save()
    .then(() => {
      res.send(newStudent);
    })
    .catch((err) => {
      res.send(err);
    });
};

let getStudentByID = (req, res) => {
  studentDB.find({ id: req.params.id }).then((result) => {
    if (result.length > 0) {
      res.send(result);
    } else {
      res.status(404).send("haha Student not found  :)");
    }
  });
};

let getAllStudents = (req, res) => {
  studentDB.find().then((result) => {
    if (result.length > 0) {
      res.send(result);
    } else {
      res.status(404).send("haha Student not found  :)");
    }
  });
};

let updateStudent = (req, res) => {
  studentDB.findOneAndUpdate({ id: req.params.id }, req.body).then((result) => {
    res.send(result);
  });
};
let deleteStudent = (req, res) => {
  studentDB
    .findOneAndDelete({ id: req.params.id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  addNewStudent,
  getStudentByID,
  updateStudent,
  getAllStudents,
  deleteStudent,
};
