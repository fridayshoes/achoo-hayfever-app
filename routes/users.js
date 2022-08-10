const { application } = require('express');
var express = require('express');
var router = express.Router();

const UsersController = require("../controllers/users");
const User = require('../models/user');

// value from React
router.post('/', function(req, res, next) {
  email = req.body.value
  console.log(email)
  // res.json(req.body.value);
  console.log(req.body.value)
  console.log(req.body)
  res.json(req.body)
  UsersController.Create(req.body)
});

// router.get("/", UsersController.New)
// router.post("/users", UsersController.Create);

router.post("/", UsersController.Create);



/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send(email);
// });


// /*Get Users email submission*/
// router.post('/', function(req, res, next) {
//   emailnew = req.body.value
//   console.log(emailnew)
//   res.json(req.body.value);
//   console.log(req.body.value)
//   const user = new User({
//         email: emailnew
//       });
//       user.save((err, result) => {
//         if (err) {
//           console.log(err);
//           res.status(409).render("users/new", { 
//             error: 'User already exists!', 
//             email: req.email});
//         } else if (result) {
//           res.status(201).redirect("/sessions/new");
//         }
//       });
// });





// Create: (req, res) => {
//   const user = new User({
// //    email: req.body.email
//     email: req.body.value
//   });
//   user.save((err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(409).render("users/new", { 
//         error: 'User already exists!', 
//         email: req.email});
//     } else if (result) {
//       res.status(201).redirect("/sessions/new");
//     }
//   });
// },



module.exports = router;
