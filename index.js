const express = require("express");
const app = express();
const connect = require("./connection");
const { type } = require("os");
const { string } = require("zod");
const { error } = require("console");
const userRouter = require("./routes/user");
const logReqRes = require("./middlewares");

connect("mongodb+srv://vineet:abcd1234@cluster0.t0w7x.mongodb.net/restapi")
  .then(() => {
    console.log("db conected");
  })
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

app.use("/user", userRouter);
app.listen(8000, () => console.log("started at port 8000"));
