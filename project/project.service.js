const Projects = require("./project.model");

const createProject = async (body) => {
  const projects = await findProject({ name: body.name });
  console.log("projects :>> ", projects);
  if (projects && projects.length > 0) {
    throw new Error(`Project with name: ${body.name} already exists`);
  }
  console.log("jdjdjdjdjdjdjdjdjdjjd");
  const project = new Projects(body);
  console.log("project :>> ", project);
  return await project.save();
};

const findProjectByUuid = async (projectId) => {};
const findProject = async (query) => {
  const projects = await Projects.find(query);
  return projects;
};

module.exports = {
  createProject,
  findProjectByUuid,
  findProject,
};
