const jwt = require("jsonwebtoken");
const account = require("../schemas/account");
const { decryptPassword } = require("../utils/utils");

//userAuthenticate -use for validating user
const userAuthenticate = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const acc = await account.findOne({ username: { $regex: `^${username}$`, $options: "i" } });

    if (!acc) {
      // User not found
      return res.status(404).json({ message: "User not found" });
    }

    //check password
    const isValid = decryptPassword(acc.hash_password, password);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const secret_key = process.env.SECRET_KEY;

    // Generate a token (use a library like jsonwebtoken)
    const token = jwt.sign({ id: acc._id }, secret_key, { expiresIn: "1h" });

    return res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = userAuthenticate;
