const express = require("express");
const path = require("path");
const app = express();
const studentsRouter = require("./routes/students");
const logging = require("./middlewares/logging");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const cors = require("cors");

//--------------------------------------------------------------------------------

//connection into DB

mongoose
  .connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Coneted sucssfuly into mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//-------------------------MiddleWares-------------------------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//-----------------------First custome Middle Ware---------------------------------------------------------

app.use(logging);

//-----------------------------Main Get Method---------------------------------------------------

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "main.html"));
});

//--------------------------------------------------------------------------------
app.get("/welcome.html", (request, response) => {
  response.sendFile(path.join(__dirname, "welcome.html"));
  response.send(
    `<h1>Welcome Home ${request.query.fname} ${request.query.lname} </h1>`
  );
});

//--------------------------------------------------------------------------------
app.post("/welcome.html", (request, response) => {
  response.sendFile(path.join(__dirname, "welcome.html"));
  response.send(
    `<h1>Welcome Home ${request.body.fname} ${request.body.lname} </h1>`
  );
});

//--------------------Student Cruid Operation----------------------------------------------------

app.use("/api/students", studentsRouter);

//---------------------------Register--------------------------------------------------

app.use("/api/users", userRouter);

//----------------------------Auth----------------------------------------------------

app.use("/api/auth", authRouter);

//--------------------------------------------------------------------------------
let port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//--------------------------------------------------------------------------------
