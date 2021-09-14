const express = require("express");
const router = express.Router();
const store = require("store");
const multer = require("multer");
const upload = multer({ dest: "public/assets/images/" });
const UserController = require("../controllers/user.controller");

router.get("/", function (req, res) {
  res.redirect("/user/profile");
});

router.get("/profile", UserController.getProfile);

router.get("/joined", UserController.getJoined);

router.post("/joined/:id", UserController.postJoinedbyId);

router.post("/profile", upload.single("avatar"), UserController.postProfile);

module.exports = router;
