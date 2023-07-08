const express = require("express");
const cors = require("cors");
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

// connect with database
connectDB();

app.get("/", async (req, res) => {
  res.send("React Page Builder Server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
