const express = require('express');
const router = express.Router();
const Houses = require('./models/houses')
const _ = require('lodash');
/* GET home page. */
router.get('/', function(req, res, next) {
  Houses.find(function(err,data){
      let result = []
      for(let item of data){
        result.push([item.latitude,item.longitude,item.price])
      }
      console.log('el result ',result)
      res.render('layout',{datosBrutos:JSON.stringify(result)});
  })

});



module.exports = router;
