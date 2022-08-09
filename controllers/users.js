const User = require("../models/user");

const UsersController = {
  // New: (req, res) => {
  //   res.render("users/new", {});
  // },

  Create: (req, res) => {
    let userData = req.body
    console.log("controller")
    console.log(userData)
    const user = new User({
      email: req.body
    });
    console.log("controller2")
    console.log(email)
    console.log(user.email)
    User.findOne({email: req.body}, (err, existingUser) => {
      if (err) {
        throw err;
      }
      if (existingUser == null) {
        user.save((err) => {
          if (err) {
            throw err;
          }
          res.status(201).redirect("/error");
        });
      } else {
        res.redirect("/");
      }
    })
  },
}

module.exports = UsersController;