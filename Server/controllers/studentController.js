const StudentModel = require("../models/studentsModel");

const getAllStudents = (req, res) => {
  StudentModel.fetchAllStudents().then((ress) => {
    res.json(ress);
  });
};

const getStudentById = (req, res) => {
  StudentModel.getStudentById(req.params.id).then((info) => res.json(info));
};

const insertingStudent = (req, res) => {
  let newStudent = new StudentModel(req.body.name, req.body.dept);
  newStudent.addStudent();
  res.end();
};

module.exports = { getAllStudents, getStudentById, insertingStudent };
