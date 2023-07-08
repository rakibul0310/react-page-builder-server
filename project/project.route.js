const express = require("express");
const { create, findAll } = require("./project.controller");

const projectRoute = express.Router();
projectRoute.post("/", create);
projectRoute.get("/", findAll);
module.exports = projectRoute;
