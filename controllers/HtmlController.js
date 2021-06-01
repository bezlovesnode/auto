var mongoose = require("mongoose");
var Html = require("../models/Product");

var htmlController = {};

// Show list of employees
htmlController.list = function(req, res) {
  Html.find({}).exec(function (err, lister) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/index", {lister: lister});
    }
  });
};

// Show employee by id
htmlController.show = function(req, res) {
  Html.findOne({_id: req.params.id}).exec(function (err, item) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/show", {item: item});
    }
  });
};

// Find item by idcode
htmlController.idcode = function(req, res) {
  Html.findOne({idcode: req.params.idcode}).exec(function (err, item) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/show", {item: item});
    }
  });
};

// List items by from
htmlController.from = function(req, res) {
  Html.find({from: req.params.from}).exec(function (err, lister) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/index", {lister: lister});
    }
  });
};

// List distinct froms
htmlController.fromlist = function(req, res) {
  Html.distinct('from').exec(function (err, fromlist) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/from", {fromlist});
    }
  });
};

// list distinct locations
htmlController.locationlist = function(req, res) {
  Html.distinct('location').exec(function (err, locationlist) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/location", {locationlist});
    }
  });
};

// list items in a location
htmlController.location = function(req, res) {
  Html.find({location: req.params.location}).exec(function (err, lister) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/index", {lister: lister});
    }
  });
};

// list items by a brand
htmlController.brand = function(req, res) {
  Html.find({brand: req.params.brand}).exec(function (err, lister) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/index", {lister: lister});
    }
  });
};

// list distinct brands
htmlController.brandlist = function(req, res) {
  Html.distinct('brand').exec(function (err, brandlist) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/brand", {brandlist});
    }
  });
};

// list items by a product
htmlController.product = function(req, res) {
  Html.find({product: req.params.product}).exec(function (err, lister) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/index", {lister, lister});
    }
  });
};

// list distinct products
htmlController.productlist = function(req, res) {
  Html.distinct('product').exec(function (err, productlist) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/product", {productlist});
    }
  });
}

// Create new employee
//htmlController.create = function(req, res) {
//  res.render("../views/html/create");
//};

// Save new employee
//htmlController.save = function(req, res) {
//  var employee = new Employee(req.body);

//  employee.save(function(err) {
//    if(err) {
//      console.log(err);
//      res.render("../views/html/create");
//    } else {
//      console.log("Successfully created an employee.");
//      res.redirect("/html/show/"+employee._id);
//    }
//  });
//};

// Edit an employee
htmlController.edit = function(req, res) {
  Html.findOne({_id: req.params.id}).exec(function (err, item) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/edit", {item: item});
    }
  });
};

// Update an employee
htmlController.update = function(req, res) {
  Html.findByIdAndUpdate(req.params.id, { $set: { brand: req.body.brand, product: req.body.product, version: req.body.version, serial: req.body.serial, processor: req.body.processor, ramtotal: req.body.ramtotal, harddrive: req.body.harddrive, location: req.body.location, from: req.body.from, idcode: req.body.idcode, notes: req.body.notes }}, { new: true }, function (err, item) {
    if (err) {
      console.log(err);
      res.render("../views/html/edit", {item: req.body});
    }
    res.redirect("/html/show/"+item._id);
  });
};

// Delete an employee
//htmlController.delete = function(req, res) {
//  Html.remove({_id: req.params.id}, function(err) {
//    if(err) {
//      console.log(err);
//    }
//    else {
//      console.log("Deleted!");
//      res.redirect("/html");
//    }
//  });
//};

module.exports = htmlController;
