const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin.controller");
const verifyAdmin = require("../middlewares/verifyAdmin");

router.use(verifyAdmin);

router.get("/", AdminController.getUserbyConference);

module.exports = router;
