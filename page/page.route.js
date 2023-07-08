const express = require("express");
const {
  changeContent,
  create,
  update,
  deletePageRecord,
  details,
  list,
  loadContent,
} = require("./page.controller");

const pageRoute = express.Router();
pageRoute.post("/", create);
pageRoute.post("/:pageId/content", changeContent);

pageRoute.put("/:pageId", update);

pageRoute.delete("/:pageId", deletePageRecord);

pageRoute.get("/:pageId", details);
pageRoute.get("/", list);
pageRoute.get("/:pageId/content", loadContent);

module.exports = pageRoute;
