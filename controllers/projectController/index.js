const Project = require("../../Models/ProjectModel");

const createProject = async (req, res) => {
  try {
    const { name } = req.body;
    const newProject = await Project.create(name);
    if (newProject) {
      res.status(200).json(newProject);
    } else {
      req.status(400).json({
        message: "Something wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const findAllProject = async (req, res) => {
  try {
    const allProject = await Project.find({});
    if (allProject) {
      res.status(200).json(allProject);
    } else {
      req.status(400).json({
        message: "Something wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const findProjectByID = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({ _id: id });
    if (project) {
      res.status(200).json(project);
    } else {
      req.status(400).json({
        message: "Something wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProject,
  findAllProject,
  findProjectByID,
};
