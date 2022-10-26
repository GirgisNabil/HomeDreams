const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentControllerDB");

//---------------------------------Students-Data-----------------------------------------------

//---------------------------------Api/Students-----------------------------------------------

router.post("/", studentController.addNewStudent);

// //--------------------------------------------------------------------------------

router.get("/", studentController.getAllStudents);

// //----------------------------------Api/Students/:ID----------------------------------------------

router.get("/:id", studentController.getStudentByID);
// //----------------------------------Api/Students/:ID----------------------------------------------

router.put("/:id", studentController.updateStudent);
// //----------------------------------Api/Students/:ID----------------------------------------------

router.delete("/:id", studentController.deleteStudent);

module.exports = router;
