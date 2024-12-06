const bcrypt = require("bcryptjs");

const encryptPassword = (password) => {
  const salt = parseInt(process.env.SALT || "") || 10;
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const decryptPassword = (hash, password) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = { encryptPassword, decryptPassword };
