module.exports = (req, res, next) => {
  if (!req.session.loggedIn) {
    console.log("User is not logged in, redirecting you to login!");
    res.redirect("/login");
    return;
  }
  next();
};
