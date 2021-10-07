const express = require("express");
//const bodyParser = require("body-parser");
const request = require("request");
let uname = ["karthi"];
let password = ["karthi"];
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //now body-parser is inbuilt in express itself and this how to use it no need to install it.

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/success.html");
});

app.get("/failure", (req, res) => {
  res.sendFile(__dirname + "/failure.html");
});
app.post("/", (req, res) => {
  // console.log(req.body);
  if (uname.includes(req.body.fName) && password.includes(req.body.password)) {
    res.redirect("/success");
  } else {
    res.redirect("/failure");
  }
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("Server started on port 3000");
});

//08ddda56b5af380182a5a70881e6166b-us5
