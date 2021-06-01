var mongoose = require("mongoose");
var Html = require("../models/Job");

var htmlController = {};

// Show list of employees
htmlController.list = function(req, res) {
  Html.find({}).exec(function (err, lister) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/job/index", {lister: lister});
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
      res.render("../views/job/show", {item: item});
    }
  });
};

// Find item by idcode
//htmlController.idcode = function(req, res) {
//  Html.findOne({idcode: req.params.idcode}).exec(function (err, item) {
//    if (err) {
//      console.log("Error:", err);
//    }
//    else {
//      res.render("../views/html/show", {item: item});
//    }
//  });
//};

// List items by from
htmlController.from = function(req, res) {
  Html.find({from: req.params.from}).exec(function (err, lister) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/job/index", {lister: lister});
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
      res.render("../views/job/from", {fromlist});
    }
  });
};

// list distinct locations
//htmlController.locationlist = function(req, res) {
//  Html.distinct('location').exec(function (err, locationlist) {
//    if (err) {
//      console.log("Error:", err);
//    }
//    else {
//      res.render("../views/html/location", {locationlist});
//    }
//  });
//};

// list items in a location
//htmlController.location = function(req, res) {
//  Html.find({location: req.params.location}).exec(function (err, lister) {
//    if (err) {
//      console.log("Error:", err);
//    }
//    else {
//      res.render("../views/html/index", {lister: lister});
//    }
//  });
//};

// list items by a brand
//htmlController.brand = function(req, res) {
//  Html.find({brand: req.params.brand}).exec(function (err, lister) {
//    if (err) {
//      console.log("Error:", err);
//    }
//    else {
//      res.render("../views/html/index", {lister: lister});
//    }
//  });
//};

// list distinct brands
//htmlController.brandlist = function(req, res) {
//  Html.distinct('brand').exec(function (err, brandlist) {
//    if (err) {
//      console.log("Error:", err);
//    }
//    else {
//      res.render("../views/html/brand", {brandlist});
//    }
//  });
//};

// list items by a product
//htmlController.product = function(req, res) {
//  Html.find({product: req.params.product}).exec(function (err, lister) {
//    if (err) {
//      console.log("Error:", err);
//    }
//    else {
//      res.render("../views/html/index", {lister, lister});
//    }
//  });
//};

// list distinct products
//htmlController.productlist = function(req, res) {
//  Html.distinct('product').exec(function (err, productlist) {
//    if (err) {
//      console.log("Error:", err);
//    }
//    else {
//      res.render("../views/html/product", {productlist});
//    }
//  });
//}

// Create new employee
htmlController.create = function(req, res) {
  res.render("../views/job/create");
};

// Save new employee
htmlController.save = function(req, res) {
  var job = new Html(req.body);

  job.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/job/create");
    } else {
      console.log("Successfully created job.");
      res.redirect("/job/show/"+job._id);
    }
  });
};

// Edit an employee
htmlController.edit = function(req, res) {
  Html.findOne({_id: req.params.id}).exec(function (err, item) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/job/edit", {item: item});
    }
  });
};

// Update an employee
htmlController.update = function(req, res) {
  Html.findByIdAndUpdate(req.params.id, { $set: { from: req.body.from, comname: req.body.comname, comaddress: req.body.comaddress, contact: req.body.contact, phone: req.body.phone, notes1: req.body.notes1, notes2: req.body.notes2, wipe: req.body.wipe, lcd: req.body.lcd, colldatetime: req.body.colldatetime }}, { new: true }, function (err, item) {
    if (err) {
      console.log(err);
      res.render("../views/job/edit", {item: req.body});
    }
    res.redirect("/job/show/"+item._id);
  });
};

// Delete an employee
htmlController.delete = function(req, res) {
  Html.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Deleted!");
      res.redirect("/job");
    }
  });
};

module.exports = htmlController;
