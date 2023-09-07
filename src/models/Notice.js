const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
});

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = Notice;
