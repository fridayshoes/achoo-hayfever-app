var express = require('express');
var axios = require("axios").default;
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Achoo!' });
}); */

/* GET home page. - React Version */
router.get('/', function(req, res, next) {
  res.send('Welcome to Achoo! from Express');
});

/* API to GET pollen by place. */
// var pollenPlace = {
//   method: 'GET',
//   url: 'https://api.ambeedata.com/latest/pollen/by-place',
//   params: {place: 'Chingford'},
//   headers: {'x-api-key': '5e552db9ddf4a0e307958dc2719ba5ea2f1e3de42e8f96b689799b5f221f7aef', 'Content-type': 'application/json'}
// };
// axios.request(pollenPlace).then(function (response) {
// 	console.log("Pollen Place");
//   console.log(response.data.data[0].Count);
// }).catch(function (error) {
// 	console.error(error);
// });

// /* API to GET pollen by Longitude and Latitude. */
// var pollenLongLat = {
//   method: 'GET',
//   url: 'https://api.ambeedata.com/latest/pollen/by-lat-lng',
//   params: {lat: '12.9889055', lng: '77.574044'},
//   headers: {'x-api-key': '5e552db9ddf4a0e307958dc2719ba5ea2f1e3de42e8f96b689799b5f221f7aef', 'Content-type': 'application/json'}
// };
// axios.request(pollenLongLat).then(function (response) {
// 	console.log("Pollen Long/Lat");
//   console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

module.exports = router;

