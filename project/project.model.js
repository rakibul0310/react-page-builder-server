const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    description: {
      type: String,
    },
    logo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Project = new mongoose.model("Projects", ProjectSchema);

module.exports = Project;
