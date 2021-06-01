var express = require('express');
var router = express.Router();
var employee = require("../controllers/EmployeeController.js");

// Get all items
router.get('/', function(req, res) {
  employee.list(req, res);
});

// Get single item by id
router.get('/show/:id', function(req, res) {
  employee.show(req, res);
});

// Get single item by idcode
router.get('/idcode/:idcode', function(req, res) {
  employee.idcode(req, res);
});

// get list of items from
router.get('/from/:from', function(req, res) {
  employee.from(req, res);
});

// get list of froms
router.get('/from/', function(req, res) {
  employee.fromlist(req, res);
});

// get list of items in location
router.get('/location/:location', function(req, res) {
  employee.location(req, res);
});

// get list of locations
router.get('/location/', function(req, res) {
  employee.locationlist(req, res);
});

// get list of brands
router.get('/brand/', function(req, res) {
  employee.brandlist(req, res);
});

// get list of items in brand
router.get('/brand/:brand', function(req, res) {
  employee.brand(req, res);
});

// get list of products
router.get('/product/', function(req, res) {
  employee.productlist(req, res);
});

// get list of items in product
router.get('/product/:product', function(req, res) {
  employee.product(req, res);
});

// Create item
router.get('/create', function(req, res) {
  employee.create(req, res);
});

// Save item
router.post('/save', function(req, res) {
  employee.save(req, res);
});

// Edit item
router.get('/edit/:id', function(req, res) {
  employee.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  employee.update(req, res);
});

// Delete item
router.post('/delete/:id', function(req, res, next) {
  employee.delete(req, res);
});

module.exports = router;
