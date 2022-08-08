const { application } = require('express');
var express = require('express');
var router = express.Router();

// let email = ""

router.post('/', function(req, res, next) {
  email = req.body.value
  console.log(email)
  res.json(req.body.value);
});

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send(email);
// });


/*Get Users email submission*/

Create: (req, res) => {
  const user = new User({
    email: req.body.email
  });
  user.save((err, result) => {
    if (err) {
      console.log(err);
      res.status(409).render("users/new", { 
        error: 'User already exists!', 
        email: req.email});
    } else if (result) {
      res.status(201).redirect("/sessions/new");
    }
  });
},



module.exports = router;
