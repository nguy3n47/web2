const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "public/assets/images/" });
const AuthController = require("../controllers/auth.controller");

router.use(function (req, res, next) {
  next();
});

router.get("/", function (req, res) {
  if (req.session.userId) {
    res.redirect("/");
  } else {
    res.redirect("auth/login");
  }
});

router.get("/login", AuthController.getLogin);

router.post("/login", AuthController.postLogin);

router.get("/register", AuthController.getRegister);

router.post("/register", upload.single("avatar"), AuthController.postRegister);

router.get("/email", AuthController.getEmail);

router.post("/email", AuthController.postEmail);

router.get("/verify", AuthController.getVerify);

router.get("/logout", AuthController.getLogout);

module.exports = router;
