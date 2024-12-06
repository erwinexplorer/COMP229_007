const jwt = require("jsonwebtoken");

//tokenAuthentication - use for validating token
const tokenAuthentication = (req, res, next) => {
  try {
    // Get the Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ status: "Unauthorized", message: "No token provided" });
    }

    // Extract the token
    const token = authHeader.split(" ")[1];

    const secret_key = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secret_key);

    req.body = { ...req.body, decoded };
    
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ status: "Unauthorized", message: "Token expired" });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(403).json({ status: "Forbidden", message: "Invalid token" });
    }
    next(error);
  }
};

module.exports = tokenAuthentication;
