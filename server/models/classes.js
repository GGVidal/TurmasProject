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
const disciplinesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  professor: {
    type: String,
    required: true,
  },
});
const classInfoSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  disciplines: {
    type: [disciplinesSchema],
    required: true,
  },
});

const zoomSchema = new mongoose.Schema({
  room: {
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
});
const classes = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    class_info: {
      type: classInfoSchema,
      required: true,
    },
    zoom: {
      type: zoomSchema,
      required: true,
    },
    schedule: {
      type: scheduleSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Classes", classes);
