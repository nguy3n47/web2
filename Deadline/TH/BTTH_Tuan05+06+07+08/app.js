var cookieSession = require("cookie-session");
const express = require("express");
var expressLayouts = require("express-ejs-layouts");
require("dotenv").config();
const db = require("./config/db");
const router = express.Router();
const bodyParser = require("body-parser");
const authRouter = require("./routers/auth");
const adminRouter = require("./routers/admin");
const configRouter = require("./routers/config");
const conferenceRouter = require("./routers/conference");
const profileRouter = require("./routers/profile");
const homeRouter = require("./routers/home");
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

app.use("/", homeRouter);
app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/config", configRouter);
app.use("/conference", conferenceRouter);
app.use("/user", profileRouter);

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
