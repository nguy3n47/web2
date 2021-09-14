const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "public/assets/images/" });
const UserController = require("../controllers/user.controller");

router.get("/", function (req, res) {
  res.redirect("/user/profile");
});

router.get("/profile", UserController.getProfile);

router.post("/profile", upload.single("avatar"), UserController.postProfile);

module.exports = router;
