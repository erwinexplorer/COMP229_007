const user = require("../schemas/user");
const account = require("../schemas/account");
const tokenAuthentication = require("../middleware/tokenAuthentication");
const userAuthenticate = require("../middleware/userAuthenticate");
const validatePassword = require("../middleware/validatePassword");
const { encryptPassword } = require("../utils/utils");
const { Router } = require("express");

const authRoute = Router();

authRoute.post("/signup", userAuthenticate, async (req, res) => {
  const { first_name, last_name, email, address, username, password } = req.body;

  const hash_password = encryptPassword(password);

  try {
    // save user to database
    const userSchema = new user({
      first_name,
      last_name,
      email,
      address,
      role: "USER",
    });
    const userSave = await userSchema.save();
    //save account to databae
    const accountSchema = new account({
      username,
      hash_password,
      user_id: userSave._id,
    });
    await accountSchema.save();
    res.status(201).json(userSave);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

authRoute.post("/signin", validatePassword, (req, res) => {
  res.status(200).send(req.body);
});

module.exports = authRoute;
