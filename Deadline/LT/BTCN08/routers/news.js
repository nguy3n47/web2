const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/news.controller");

router.get("/", NewsController.getAllNews);

router.post("/", NewsController.postNews);

module.exports = router;
