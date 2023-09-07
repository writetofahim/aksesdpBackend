const mongoose = require("mongoose");

const boardResultsSchema = new mongoose.Schema({
  pdfTitle: {
    type: String,
    required: true,
  },
  pdfLink: {
    type: String,
    required: true,
  },
});

const BoardResults = mongoose.model("BoardResults", boardResultsSchema);

module.exports = BoardResults;
