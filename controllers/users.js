const User = require("../models/user");

const UsersController = {
  Create: (req, res) => {
    const userData = req.body
    console.log("controller1")
    console.log(userData)
    const user = new User({
      email: req.body.email,
      mobile: req.body.mobile,
      location: req.body.location,
      pollen: req.body.pollen
    });
    console.log("controller2")
    console.log({user})
    // console.log(user.id)
    // console.log(user.email)
    // console.log(res)
    User.findOne({email: user.email}, (err, existingUser) => {
      if (err) {
        throw err;
      }
      if (existingUser == null) {
        user.save((err) => { // saves to database
          if (err) {
            throw err;
          }
          // console.log(res)
          res.status(201).send ("/");
        });
      } else {
        res.redirect("/");
      }
    })
  },
}

module.exports = UsersController;