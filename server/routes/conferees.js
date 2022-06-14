const https = require("https");
const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
require("./models/files.model");
const File = mongoose.model("file");

const Conferees = require("./models/conferees.model");

mongoose.connect("mongodb://192.168.6.201:27017/young-conference", {
  useNewUrlParser: true,
});
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 4200;

app.post("/signup", (req, res, next) => {
  const newConferee = new Conferees({
    name: req.body.name,
    graduate: req.body.graduate,
    position: req.body.position,
    organisation: req.body.organisation,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
    report: req.body.report,
    participation: req.body.participation,
    coAuthors: req.body.coAuthors,
    time: req.body.time,
  });
  console.log(newConferee);
  newConferee.save((err) => {
    if (err) {
      return res.status(400).json({
        title: "Error",
      });
    }
    return res.status(200).json({
      title: "Success",
    });
  });
});

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(null, "THESIS-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 20000 },
}).single("file");

const obj = (req, res) => {
  upload(req, res, () => {
    console.log("Request ---", req.body);
    console.log("Request file ---", req.file);
    const file = new File();
    file.meta_data = req.file;
    file.save().then(() => {
      res.send({ message: "uploaded successfully" });
    });
  });
};

app.post("/upload", obj);

app.get("/", (req, res, next) => {
  res.send("Express AddConferees");
});

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`AddConferees server running on port ${port}`);
});

module.exports = app;
