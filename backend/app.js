const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const expressEjsLayout = require("express-ejs-layouts");
const flash = require("connect-flash");
const session = require("express-session");
const logger = require('morgan');
const passport = require("passport");
const config = require('../config')
const port = 8000;
const bodyParser = require('body-parser')
const fs = require("fs");


mongoose.connect(config.db, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


//passport config:
require("./config/passport")(passport);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json())
app.set("views", path.join(__dirname, "./../frontend/views"));
app.set("view engine", "ejs");

app.use("/js", express.static(path.join(__dirname, "./../frontend/js")));
app.use( "/assets", express.static(path.join(__dirname, "./../frontend/assets"))
);


// // do reserwacji
// app.use((req,resp,next)=>{
//   resp.header("Access-Control-Allow-Origin","*");
//   resp.header("Access-Control-Allow-Headers","Content-Type,x-access-token");
//   resp.header("Access-Control-Allow-Methods","GET,POST");
//   next();
// });


// app.use((req,res,next)=>{
// res.header("Access-Control-Allow-Origin","*");
// res.header("Access-Control-Allow-Headers","Content-Type,x-access-token");
// res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE")
// next();
// });




//express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

//Routes
app.use("/", require("./routes/routes"));
app.use("/users", require("./routes/users"));
app.use('/dashboards/reservation', require('./routes/reservation'));



app.listen(port, (err) => {
  if (err) {
    return console.log(`Wystąpił błąd ${err}`);
  }
  return console.log(`Apka działa na porcie ${port}`);
});


module.exports = app
