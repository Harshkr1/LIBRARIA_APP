const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/register"); // Adjust the path as needed
require("dotenv").config();

// Define the Local Strategy for authentication
passport.use(new LocalStrategy(
  {
    usernameField: "username", // The field name for username in your form
    passwordField: "password", // The field name for password in your form
  },
  (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  }
));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
