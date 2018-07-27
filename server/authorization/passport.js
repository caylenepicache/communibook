if (!process.env.PORT) require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;


const db = require('../models');


const GoogleCreds = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CB_URL
}


passport.use(new GoogleStrategy(GoogleCreds,
  (accessToken, refreshToken, profile, cb) => {
    const searchConditions = {
      $or: [
        { email: profile.emails[0].value },
        { google_id: profile.id.toString() }
      ]
    };

    const newUser = {
      email: profile.emails[0].value,
      google_id: profile.id.toString(),
      name: profile.displayName
    }

    db.Account
      .findOrCreate({ where: searchConditions, defaults: newUser })
      .spread((Account, creation) => {

        return cb(null, Account)
      })
  }))


passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

module.exports = passport;