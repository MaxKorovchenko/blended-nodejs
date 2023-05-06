const express = require("express");
const { tasksRouter } = require("./routes/tasksRouter");

const app = express();
app.use(express.json());

app.use("/tasks", tasksRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).json({ message: err.message || "something went wrong. Please try again later" });
});

module.exports = { app };