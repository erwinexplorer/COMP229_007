const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, require: false },
  role: { type: String, required: true },
});

module.exports = model("user", userSchema);

