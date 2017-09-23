const express = require('express');
const router = express.Router();
const Houses = require('./models/houses')
// const _ = require('lodash');
// let redis = require("redis"),
//   client = redis.createClient();
/* GET home page. */
let result = [];

router.get('/', function(req, res, next) {
  res.render('layout');
});

router.get('/data', async function(req, res, next) {
  try{
    console.log("getting /data")
    let data = await Houses.find();
    console.log('data weight',data.length)
    for(let item of data){
      result.push([item.latitude,item.longitude,item.price])
    }
    //let rawdata = {data:data}
    res.status(200).json({data:result});

  }catch(err){
    throw err;
  }
});


module.exports = router;