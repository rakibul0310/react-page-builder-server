const Page = require("../../Models/PageModel");

const renderHtml = async (req, res, next) => {
  try {
    const { id } = req.params;
    const page = await Page.findOne({ _id: id });
    if (!page) {
      res.render("404");
    }
    const { content, name } = page;
    let html = content["mycustom-html"];

    const css = content["mycustom-css"];

    res.render("render", { html, css, name });
  } catch (error) {
    res.render("404");
  }
};

module.exports = renderHtml;
