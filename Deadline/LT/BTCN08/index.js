var cookieSession = require("cookie-session");
const express = require("express");
var expressLayouts = require("express-ejs-layouts");
require("dotenv").config();
const db = require("./config/db");
const bodyParser = require("body-parser");
const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");
const newsRouter = require("./routers/news");
const authMiddleware = require("./middlewares/auth");
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

const app = express();

// Session
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY || "secret"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(authMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(expressLayouts);

app.use("/", newsRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);

db.sync()
  .then(function () {
    app.listen(port, function (error) {
      if (error) {
        console.log("Something went wrong");
      }
      console.log(`Server running at http://${hostname}:${port}/`);
    });
  })
  .catch(console.error);
