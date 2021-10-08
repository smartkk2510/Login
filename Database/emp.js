const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  emp_id: String,
  email: String,
  password: String,
  Org_name: String,
  branch: String,
  gender: String,
  ph_no: String,
  experiance: String,
});

const empModal = mongoose.model("employees", schema);

module.exports = empModal;
