"use strict";

const express = require("express");
const cors = require("cors");
const multer = require("multer");

// require and use "multer"...

const app = express();
const upload = multer();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Node listening on port ${port}...`);
});
