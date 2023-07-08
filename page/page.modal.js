const mongoose = require("mongoose");
const { Schema } = mongoose;

const PageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    slug: {
      type: String,
      required: true,
    },
    content: Object,
  },
  {
    timestamps: true,
  }
);

const Page = new mongoose.model("Pages", PageSchema);

module.exports = Page;
