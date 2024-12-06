const { Schema, model } = require("mongoose");

const accountSchema = new Schema({
  username: { type: String, required: true },
  hash_password: { type: String, required: true },
  user_id: { type: String, required: true },
});

module.exports = model("account", accountSchema);
