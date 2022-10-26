const { error } = require("console");
const fs = require("fs");
const path = require("path");

const database = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "Students.json"
);

module.exports = class Students {
  constructor(name, dept) {
    this.name = name;
    this.dept = dept;
  }

  static fetchAllStudents() {
    return new Promise((res, rej) => {
      fs.readFile(database, (err, result) => {
        if (err) {
          rej("error in fetching all students");
        } else {
          res(JSON.parse(result));
        }
      });
    });
  }

  static getStudentById(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(database, (err, result) => {
        let array = [];
        if (!err) {
          array = JSON.parse(result);
          resolve(
            array.find((val) => {
              return val.id == id;
            })
          );
        } else {
          reject("error couldnt find student");
        }
        console.log(resolve);
      });
    });
  }

  addStudent() {
    fs.readFile(database, (err, result) => {
      let editedArray = [];
      if (!err) {
        editedArray = JSON.parse(result);
        this.id = editedArray.length + 1;
        editedArray.push(this);

        fs.writeFile(database, JSON.stringify(editedArray), (errr) => {
          if (errr) {
            console.log("error");
          } else {
            console.log("inforamtion saved !!");
          }
        });
      }
    });
    // students.push(this);
  }
};
