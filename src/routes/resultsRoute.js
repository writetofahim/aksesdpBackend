const express = require("express");
const router = express.Router();
const boardResultsController = require("../controllers/boardResultsController");

router.post("/board", boardResultsController.postBoardResults);

module.exports = router;
