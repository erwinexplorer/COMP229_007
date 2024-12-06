const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//initialize env
dotenv.config();

//initialize environment variables
const DATABASE_URL = process.env.DATABASE_URL || "";
const port = process.env.PORT || 3000;

//initialize database
mongoose.connect(DATABASE_URL, {
  dbName: "recipe",
});

//connect to database
const db = mongoose.connection;
db.on("error", (err) => console.error(`Database error : ${err}`));
db.once("open", () => console.log("connected to database!"));

//initialize express
const app = express();

//initialize json
app.use(express.json());

//initialize route paths
const authRoute = require("./routes/authenticate");
const userRoute = require("./routes/user");

//initialize routes
app.use("/", authRoute);
app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
