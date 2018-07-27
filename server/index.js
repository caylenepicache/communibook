if (!process.env.PORT) require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');
const {join} = require('path')
const app = express();
const PORT = process.env.PORT || 3000;
const authRouter = require('./routes/auth-routes');
const apiRoutes = require('./routes/library-api-routes');
//const {authorization} = require('./authorization');
var passport = require('passport');
const db = require('./models');
var keys = require('./config/keys.js');

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
  next();
})

app.use(cookieSession({
  maxAge: 1800000,
  keys: [keys.session.cookieKey]
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(join(__dirname, '../client/build')));


app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRouter);
//app.use(apiRoutes);



db.sequelize.sync().then(function () {
  console.log('Database good');
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!");
});