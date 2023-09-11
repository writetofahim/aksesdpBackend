const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  filename: String,
  path: String,
});

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;
