const { listPages } = require("../page/page.services");

const home = async (req, res) => {
  const pages = await listPages();
  res.render("home", { title: "Webpage Builder", pages });
};

const editor = async (req, res) => {
  const pages = await listPages();
  const selectedPage = pages.find((page) => page.id === req.params.pageId);
  res.render("editor", { title: "Webpage Builder", pages, selectedPage });
};

module.exports = {
  editor,
  home,
};
