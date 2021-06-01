var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Hard = require('../models/Hard.js');

/* GET ALL PRODUCTS */
router.get('/', function(req, res, next) {
  Hard.find(function (err, disks) {
    if (err) return next(err);
    res.json(disks);
  });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
  Hard.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/from/:from', function(req, res, next) {
  Hard.find({ 'from': req.params.from }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/serial/:serial', function(req, res, next) {
  Hard.find({ 'serial': req.params.serial }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
  Hard.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PRODUCT */
//router.put('/:id', function(req, res, next) {
//  Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//    if (err) return next(err);
//    res.json(post);
//  });
//});

// this needs to be adjusted for making changes during DD

router.delete('/:id', function(req, res, next) {
  Hard.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
