const express = require("express");
const router = express.Router();
const {
  createPage,
  changePageContent,
  deletePageRecord,
  pageDetails,
  pageList,
  loadPageContent,
} = require("../../controllers/pageController");

router.post("/page", createPage);
router.post("/page/:id", changePageContent);
router.delete("/page/:id", deletePageRecord);
router.get("/page/:id", pageDetails);
router.get("/page", pageList);
router.get("/page/:id", loadPageContent);

module.exports = router;
