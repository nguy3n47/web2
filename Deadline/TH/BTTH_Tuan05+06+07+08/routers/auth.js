const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");
const multer = require("multer");
const upload = multer({ dest: "public/assets/images/" });

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

router.get("/logout", AuthController.getLogout);

router.get("/register", AuthController.getRegister);

router.post("/register", upload.single("avatar"), AuthController.postRegister);

module.exports = router;
