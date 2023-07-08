const express = require("express");
const { home, editor } = require("../../controllers/UI_Controller");

const router = express.Router();

router.get("/home", home);
router.get("/editor/:id", editor);
router.all("*", (req, res) => {
  res.render("404");
});

module.exports = router;
