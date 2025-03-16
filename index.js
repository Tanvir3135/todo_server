require("dotenv").config();
// console.log(process.env);
const express = require("express");

const cors = require("cors");
const todoRouter = require("./routes/todo");
const app = express();
app.use(cors());

const port = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", todoRouter);
app.listen(port);
