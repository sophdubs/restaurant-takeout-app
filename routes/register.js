const express = require("express");
const router = express.Router();

module.exports = ({ registerUser }) => {
  router.get("/", (req, res) => {
    templateVars = {
      errorMsg: null
    };
    res.render("register", templateVars);
  });

  router.post("/", (req, res) => {
    const {userName, userEmail, userPhone, userPassword} = req.body;
    // If user submits with missing inputs, redirect back to register page with error message
    if (!userName || !userEmail || !userPhone || !userPassword) {
      let templateVars = {
        errorMsg: 'Please fill out all fields before submitting'
      };
      res.render("register", templateVars)
    };
    const values = [userName, userEmail, userPhone, userPassword, 'customer'];
    registerUser(values)
      .then(newUser => {
        req.session.user_id = newUser.id;
        req.session.role = newUser.role;
        res.redirect("menu");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
    });
  });
  return router;
};
