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

module.exports = router;
