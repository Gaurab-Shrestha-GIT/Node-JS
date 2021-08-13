const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

const connectDB = require("./server/database/connection");

//mongodb connection
connectDB();

//parse request tp body parser
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set view engine
app.set("view engine", "ejs");

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//load routers
app.use("/", require("./server/routes/router"));

app.listen(process.nextTick.PORT || 3000, (err) => {
  if (!err) {
    console.log("Server is running on http://localhost:3000");
  } else {
    console.log("Server not connected");
  }
});
