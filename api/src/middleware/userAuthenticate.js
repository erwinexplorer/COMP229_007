const jwt = require("jsonwebtoken");
const account = require("../schemas/account");

//userAuthenticate -use for validating user
const userAuthenticate = async (req, res, next) => {
  try {
    const { username } = req.body;

    // Find the user by username
    const acc = await account.findOne({ username: { $regex: `^${username}$`, $options: "i" } });

    if (acc) {
      // User found
      return res.status(409).json("Username already exists");
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = userAuthenticate;
