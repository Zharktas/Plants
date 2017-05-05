var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/public/index.html');
});


var measurements = [];

router.post('/measurement', function(req, res, next){
  var payload = req.body;
  console.log(payload);
  measurements.push({"date": payload.published_at, data: payload.data});
  res.json("ok");
});

router.get('/measurements', function (req, res, next){
  res.json(measurements);
});


module.exports = router;
