const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  res.locals.title = "Add Two Numbers";
  next();
});

router.get("/", function (req, res) {
  res.render("BTCN03/form");
});

router.post("/", function (req, res) {
  const firstNumber = Number(req.body.firstNumber);
  const secondNumber = Number(req.body.secondNumber);
  const result = firstNumber + secondNumber;
  res.render("BTCN03/result", { firstNumber, secondNumber, result });
});

module.exports = router;
