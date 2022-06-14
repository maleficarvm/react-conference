const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Conferees = new Schema(
  {
    name: {
      type: String,
    },
    graduate: {
      type: String,
    },
    position: {
      type: String,
    },
    organisation: {
      type: String,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    report: {
      type: String,
    },
    participation: {
      type: String,
    },
    coAuthors: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  { collection: "conferees" }
);
module.exports = mongoose.model("Conferees", Conferees);
