const express = require("express");
const { home } = require("../../controllers/UI_Controller");

const router = express.Router();

router.get("/home", home);
router.get("/editor/:id", findAllProject);
router.all("*", (req, res) => {
  res.render("404");
});

module.exports = router;
