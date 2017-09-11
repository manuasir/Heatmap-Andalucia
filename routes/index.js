const express = require('express');
const router = express.Router();
const Houses = require('./models/houses')
const _ = require('lodash');
var redis = require("redis"),
    client = redis.createClient('redis://77.227.117.213');
/* GET home page. */
let result = [];

router.get('/', function(req, res, next) {
  	res.render('layout');
});

router.get('/data', function(req, res, next) {
	console.log("getting /data")
	client.get("rawdata", function (err, replies) {
		if(err){
			console.error(err)
			return res.status(404).json({error:'data error'});
		}
		let parsedData = JSON.parse(replies)
      	res.status(200).json(parsedData);
	});
});


module.exports = router;