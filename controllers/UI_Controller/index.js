const Page = require("../../Models/PageModel");

const home = async (req, res) => {
  const pages = await Page.find({});
  res.render("home", { title: "Webpage Builder", pages });
};

const editor = async (req, res) => {
  const { id } = req.params;
  const pages = await Page.find({});
  const selectedPage = pages.find((page) => page._id === id);
  res.render("editor", { title: "Webpage Builder", pages, selectedPage });
};

module.exports = {
  home,
  editor,
};
