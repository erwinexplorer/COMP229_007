const { Router } = require("express");
const tokenAuthentication = require("../middleware/tokenAuthentication");

const userRoute = Router();


//TODO:CONTINUE IF STILL NEEDED
userRoute.get("/", tokenAuthentication, (req, res) => {
  console.log("QWEQWEQW");
  try {
    const { id } = req.body.decoded;
    console.log({ body: req.body });
    res.json(id);
  } catch (error) {}
});

module.exports = userRoute;
