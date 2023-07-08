const Pages = require("./page.modal");

const createPage = async (pageBody) => {
  const slug = pageBody.name.toLowerCase().split(" ").join("-");
  pageBody.slug = slug;
  const page = new Pages(pageBody);
  const pageResponse = await page.save();
  return pageResponse;
};
const listPages = async () => {
  const pages = await Pages.find({});
  return pages;
};
const deletePage = async (pageId) => {};
const updatePage = async (pageId, pageBody) => {};
const pageDetails = async (pageId) => {
  const pages = await Pages.findOne({ _id: pageId });
  return pages;
};
const savePageContent = async (pageId, content) => {
  const pageUpdated = await Pages.findOneAndUpdate(
    { _id: pageId },
    { content }
  );
  return pageUpdated;
};
const findPageById = async (pageId) => {
  const page = await Pages.findById(pageId);
  return page;
};

module.exports = {
  createPage,
  deletePage,
  findPageById,
  listPages,
  pageDetails,
  savePageContent,
  updatePage,
};
