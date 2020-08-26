const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  start: {
    type: String,
    required: true,
  },
  finish: {
    type: String,
    required: true,
  },
});

const classes = new mongoose.Schema(
  {
    classroom: {
      type: String,
      required: true,
    },
    host: {
      type: String,
      required: true,
    },
    account: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    schedule: {
      type: scheduleSchema,
      required: true,
    },
    instructors: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Classes", classes);
