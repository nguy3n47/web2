require('dotenv').config();

const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./config/db');
const authMiddleware = require('./middleware/auth');
const routes = require('./routes');
const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;

const app = express();

// Session
app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_KEY || 'secret'],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));

// Set Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts');
app.set('view engine', 'ejs');

app.use(authMiddleware);
app.use('/', routes);

db.sync()
  .then(function () {
    app.listen(port, function (error) {
      if (error) {
        console.log('Something went wrong');
      }
      console.log(`Server running at http://${hostname}:${port}/`);
    });
  })
  .catch(console.error);
