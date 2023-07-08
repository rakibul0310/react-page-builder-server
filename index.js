const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const uiRoute = require("./ui/ui.route");
const pageRoute = require("./page/page.route");
const assetRoute = require("./assets/assets.route");
const projectRoute = require("./project/project.route");
const renderHtml = require("./render/render.controller");
const connectDB = require("./config/db");
//Initialize App
const app = express();
app.use(express.json());
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};

corsOptions.credentials = true;
app.use(cors(corsOptions));

//HTML and Static file
app.use("/resources", express.static(path.join(__dirname, "public")));
app.set("views", `views`);
app.set("view engine", "hbs");

connectDB();

app.use("/api/projects", projectRoute);
app.use("/api/pages", pageRoute);
app.use("/api/assets", assetRoute);
app.use("/api/", uiRoute);
app.get("/:pageId?", renderHtml);

const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
