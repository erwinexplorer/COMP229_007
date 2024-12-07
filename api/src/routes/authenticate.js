// import user from "../schemas/user";
const tokenAuthentication = require("../middleware/tokenAuthentication");
const userAuthenticate = require("../middleware/userAuthenticate");
const { encryptPassword } = require("../utils/utils");
const { Router } = require("express");

const authRoute = Router();

authRoute.post("/signup", async (req, res) => {
  const { first_name, last_name, email, username, password } = req.body;
  const hash_password = encryptPassword(password);

  try {
    // save user to database
    const userSchema = new user({
      first_name,
      last_name,
      email,
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
    res.status(400).json({ message: error.message });
  }
});

authRoute.post("/signin", userAuthenticate, (req, res) => {
  res.status(200).send(req.body);
});

authRoute.get("/validate_token", tokenAuthentication, (req, res) => {
  res.status(204);
});

module.exports = authRoute;
