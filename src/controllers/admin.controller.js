const Admin = require("../models/admin.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  
    // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const admin = new Admin({
    email_admin : req.body.email_admin,
    nama_admin : req.body.nama_admin,
    role_admin : req.body.role_admin,
    password_admin : req.body.password_admin
  });

  Admin.create(admin, (err, data) => {
    if (err)
      res.status(500).send({
        success: false,
        data: null,
        message:
          err.message || "Some error occurred while creating the Admin."
      });
    else res.send({success:true,data: null, message: "Admin berhasil dibuat"});
  });

};

// Retrieve all Admin from the database.
exports.findAll = (req, res) => {
    Admin.getAll((err, data) => {
        if (err)
          res.status(500).send({
              success: false,
              data: null,
                message:
                err.message || "Some error occurred while retrieving admin."
          });
        else res.send({success:true,data: data, message: ""});
      });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Admin.updateById(
    req.params.adminId,
    new Admin(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            success: false,
            data: null,
            message: `Not found tbl_admin with id ${req.params.adminId}.`
          });
        } else {
          res.status(500).send({
            success: false,
            data: null,
            message: "Error updating tbl_admin with id " + req.params.adminId
          });
        }
      } else res.send({success:true,data: null, message: "Admin berhasil di update"});
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  Admin.remove(req.params.adminId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          success: false,
          data: null,
          message: `Not found Admin with id ${req.params.adminId}.`
        });
      } else {
        res.status(500).send({
          success: false,
          data: null,
          message: "Could not delete Admin with id " + req.params.adminId
        });
      }
    } else res.send({success:true,data: null, message: "Admin berhasil di delete"});
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  
};