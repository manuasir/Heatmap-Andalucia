const express = require('express');
const router = express.Router();
const Houses = require('./models/houses')
const _ = require('lodash');
var redis = require("redis"),
    client = redis.createClient();
/* GET home page. */
let result = [];

router.get('/', function(req, res, next) {
	console.log("getting /")
	client.get("rawdata", function (err, replies) {
		if(err){
			console.error(err)
			return res.render('error');
		}
		let parsedData = JSON.parse(replies)
		let arr = parsedData.data;
      	res.render('layout',{datosBrutos:arr});
	});
});



module.exports = router;