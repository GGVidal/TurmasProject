const mongoose = require("mongoose");

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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Classes", classes);
