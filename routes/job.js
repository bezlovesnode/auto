var express = require('express');
var router = express.Router();
var html = require("../controllers/JobController.js");

// Get all items
router.get('/', function(req, res) {
  html.list(req, res);
});

// Get single item by id
router.get('/show/:id', function(req, res) {
  html.show(req, res);
});

// Get single item by idcode
//router.get('/idcode/:idcode', function(req, res) {
//  html.idcode(req, res);
//});

// get list of items from
router.get('/from/:from', function(req, res) {
  html.from(req, res);
});

// get list of froms
router.get('/from/', function(req, res) {
  html.fromlist(req, res);
});

// get list of items in location
//router.get('/location/:location', function(req, res) {
//  html.location(req, res);
//});

// get list of locations
//router.get('/location/', function(req, res) {
//  html.locationlist(req, res);
//});

// get list of brands
//router.get('/brand/', function(req, res) {
//  html.brandlist(req, res);
//});

// get list of items in brand
//router.get('/brand/:brand', function(req, res) {
//  html.brand(req, res);
//});

// get list of products
//router.get('/product/', function(req, res) {
//  html.productlist(req, res);
//});

// get list of items in product
//router.get('/product/:product', function(req, res) {
//  html.product(req, res);
//});

// Create item
router.get('/create', function(req, res) {
  html.create(req, res);
});

// Save item
router.post('/save', function(req, res) {
  html.save(req, res);
});

// Edit item
router.get('/edit/:id', function(req, res) {
  html.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  html.update(req, res);
});

// Delete item
router.post('/delete/:id', function(req, res, next) {
  html.delete(req, res);
});

module.exports = router;
