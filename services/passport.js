const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = mongoose.model("users");

passport.serializeUser((user, next) => {
  next(null, user.id);
});

passport.deserializeUser((id, next) => {
  User.findById(id)
    .then(user => {
      next(null, user);
    })
    .catch(err => {
      console.log(err);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/api/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, next) => {
      const existingUser = await User.findOne({ "info.googleID": profile.id });
      if (existingUser) {
        return next(null, existingUser);
      }
      const user = await new User({
        info: {
          googleID: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
          image: profile._json.image.url,
          gender: profile.gender
        },
        data: { init: 0 }
      }).save();

      next(null, user);
    }
  )
);
