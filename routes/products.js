var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/Product.js');

/* GET ALL PRODUCTS */
router.get('/', function(req, res, next) {
  Product.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
  Product.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/idcode/:idcode', function(req, res, next) {
  Product.findOne({ 'idcode': req.params.idcode }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/from/:from', function(req, res, next) {
  Product.find({ 'from': req.params.from }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/serial/:serial', function(req, res, next) {
  Product.find({ 'serial': req.params.serial }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.get('/location/:location', function(req, res, next) {
  Product.find({ 'location': req.params.location }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
  Product.create(req.body, function (err, post) {
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

/* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
