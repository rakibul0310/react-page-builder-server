const Page = require("../../Models/PageModel");

const createPage = async (req, res) => {
  try {
    const pageBody = req.body;
    const page = await Page.create(pageBody);
    if (page) {
      res.json(page);
    } else {
      res.json({ message: "Something wrong" });
    }
  } catch (error) {
    console.log(error);
  }
};

const pageList = async (req, res) => {
  try {
    const pages = await Page.find({});
    res.json(pages);
  } catch (error) {
    console.log(error);
  }
};

const pageDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await Page.findOne({ _id: id });
    res.json(details);
  } catch (error) {
    console.log(error);
  }
};

const deletePageRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Page.deleteOne({ _id: id });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const changePageContent = async (req, res) => {
  try {
    const { id } = req.params;
    const content = req.body;
    const updatedPage = await Page.findOneAndUpdate(
      { _id: id },
      {
        content,
      }
    );
    res.json(updatedPage);
  } catch (error) {
    console.log(error);
  }
};

const loadPageContent = async (req, res) => {
  try {
    const { id } = req.body;
    const page = await Page.findOne({ _id: pageId });
    res.json(page.content);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createPage,
  pageList,
  pageDetails,
  changePageContent,
  deletePageRecord,
  loadPageContent,
};
