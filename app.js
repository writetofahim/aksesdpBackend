const express = require("express");
const app = express();
const cors = require("cors");
const noticeRoute = require("./src/routes/noticeRoute");
const newsRoute = require("./src/routes/news");
const authRoute = require("./src/routes/authRoute");
const routineRoute = require("./src/routes/routineRoute");
const resultsRoute = require("./src/routes/resultsRoute");

app.use(cors());
app.use(express.json());

// if specified route
app.use("/api/notice/", noticeRoute);
app.use("/api/news/", newsRoute);
app.use("/api/auth/", authRoute);
app.use("/api/routine/", routineRoute);
app.use("/api/results/", resultsRoute);

// if home or root route
app.get("/", (req, res) => {
  res.send("<h1>this is home route 12</h1>");
});

// if unknown route
app.use((req, res) => {
  res.send("<h1>404 not found</h1>");
});

module.exports = app;
