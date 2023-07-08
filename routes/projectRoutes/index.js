const express = require("express");
const {
  findAllProject,
  findProjectByID,
  createProject,
} = require("../../controllers/projectController");
const router = express.Router();

router.post("/project", createProject);
router.get("/project", findAllProject);
router.post("/project/:id", findProjectByID);

module.exports = router;
