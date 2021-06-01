var mongoose = require("mongoose");
var Employee = require("../models/Product");

var employeeController = {};

// Show list of employees
employeeController.list = function(req, res) {
  Employee.find({}).exec(function (err, employees) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/index", {employees: employees});
    }
  });
};

// Show employee by id
employeeController.show = function(req, res) {
  Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/show", {employee: employee});
    }
  });
};

// Find item by idcode
employeeController.idcode = function(req, res) {
  Employee.findOne({idcode: req.params.idcode}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/show", {employee: employee});
    }
  });
};

// List items by from
employeeController.from = function(req, res) {
  Employee.find({from: req.params.from}).exec(function (err, employees) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/index", {employees: employees});
    }
  });
};

// List distinct froms
employeeController.fromlist = function(req, res) {
  Employee.distinct('from').exec(function (err, fromlist) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/from", {fromlist});
    }
  });
};

// list distinct locations
employeeController.locationlist = function(req, res) {
  Employee.distinct('location').exec(function (err, locationlist) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/location", {locationlist});
    }
  });
};

// list items in a location
employeeController.location = function(req, res) {
  Employee.find({location: req.params.location}).exec(function (err, employees) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/index", {employees: employees});
    }
  });
};

// list items by a brand
employeeController.brand = function(req, res) {
  Employee.find({brand: req.params.brand}).exec(function (err, employees) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/index", {employees: employees});
    }
  });
};

// list distinct brands
employeeController.brandlist = function(req, res) {
  Employee.distinct('brand').exec(function (err, brandlist) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/brand", {brandlist});
    }
  });
};

// list items by a product
employeeController.product = function(req, res) {
  Employee.find({product: req.params.product}).exec(function (err, employees) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/index", {employees, employees});
    }
  });
};

// list distinct products
employeeController.productlist = function(req, res) {
  Employee.distinct('product').exec(function (err, productlist) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/product", {productlist});
    }
  });
}

// Create new employee
employeeController.create = function(req, res) {
  res.render("../views/html/create");
};

// Save new employee
employeeController.save = function(req, res) {
  var employee = new Employee(req.body);

  employee.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/html/create");
    } else {
      console.log("Successfully created an employee.");
      res.redirect("/html/show/"+employee._id);
    }
  });
};

// Edit an employee
employeeController.edit = function(req, res) {
  Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/html/edit", {employee: employee});
    }
  });
};

// Update an employee
employeeController.update = function(req, res) {
  Employee.findByIdAndUpdate(req.params.id, { $set: { brand: req.body.brand, product: req.body.product, version: req.body.version, serial: req.body.serial, processor: req.body.processor, ramtotal: req.body.ramtotal, harddrive: req.body.harddrive, location: req.body.location, from: req.body.from, idcode: req.body.idcode, notes: req.body.notes }}, { new: true }, function (err, employee) {
    if (err) {
      console.log(err);
      res.render("../views/html/edit", {employee: req.body});
    }
    res.redirect("/html/show/"+employee._id);
  });
};

// Delete an employee
employeeController.delete = function(req, res) {
  Employee.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Deleted!");
      res.redirect("/html");
    }
  });
};

module.exports = employeeController;
