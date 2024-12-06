const { Schema } = require("mongoose");

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
});

module.exports = mongoose.model("user", userSchema);
