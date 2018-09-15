const passport = require("passport");
module.exports = app => {
  app.get(
    "/api/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  app.get(
    "/api/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/settings");
    }
  );
  app.get("/api/currentUser", (req, res) => {
    res.send(req.user);
  });
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
