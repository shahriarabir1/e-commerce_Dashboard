//module import
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//middleware import
const userRouter = require("./Routers/userRouter");
//configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

//router call
app.use("/signup", userRouter);
//connected to database
mongoose
  .connect(process.env.MONGO_CON)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(`There is an connection error ${err}`);
  });

//listen port
app.listen(process.env.PORT, () => {
  console.log(`App is running at ${process.env.PORT} port`);
});
