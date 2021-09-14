const express = require("express");
const router = express.Router();
const verifyAdmin = require("../middlewares/verifyAdmin");
const AdminController = require("../controllers/admin.controller");

router.use(verifyAdmin);

router.get("/", AdminController.showConfig);

router.post("/", AdminController.submitConfig);

module.exports = router;
