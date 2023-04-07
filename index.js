const express = require("express");
// const { default: mongoose } = require("mongoose");
const methodOverride = require("method-override");
const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use("/waiting", (req, res) => {
  res.render("waiting");
});

app.use("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => console.log("Server started listening on port : 3000"));
