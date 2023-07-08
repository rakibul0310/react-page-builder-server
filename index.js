const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");
const ProjectRoutes = require("./routes/projectRoutes/index");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
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

// connect with database
connectDB();

app.use("/api", ProjectRoutes);

app.get("/", async (req, res) => {
  res.send("React Page Builder Server");
});

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
