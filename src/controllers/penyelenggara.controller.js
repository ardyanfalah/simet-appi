const Penyelenggara = require("../models/penyelenggara.model.js");
const path = require("path");

exports.upload = (req, res) => {
  
    if (!req.files)
        res.status(400).send({
            success: false,
            data: null,
            message:
            err.message || "No files were uploaded."
        });
    var file = req.files.uploaded_image;
    console.log()
    var img_name=Date.now() + path.extname(file.name);
    if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
        file.mv('public/uploads/'+img_name)
    }

    // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const penyelenggara = new Penyelenggara({
    email_penyelenggara : req.body.email_penyelenggara,
    nama_penyelenggara : req.body.nama_penyelenggara,
    password_penyelenggara : req.body.password_penyelenggara,
    status_penyelenggara : req.body.status_penyelenggara,
    hp_penyelenggara : req.body.hp_penyelenggara,
    gambar_penyelenggara : req.body.gambar_penyelenggara,
    status : req.body.status
  });

  Penyelenggara.create(penyelenggara, (err, data) => {
    if (err)
      res.status(500).send({
        success: false,
        data: null,
        message:
          err.message || "Some error occurred while creating the Penyelenggara."
      });
    else res.send({success:true,data: null, message: "Penyelenggara berhasil dibuat"});
  });

};

exports.download = (req,res)=>{
    const file = `${process.cwd()}/public/uploads/1614940172364.jpg`;
    res.download(file); // Set disposition and send it.
}
// Create and Save a new Customer
exports.create = (req, res) => {
  
    if (!req.files)
        res.status(400).send({
            success: false,
            data: null,
            message:
            err.message || "No files were uploaded."
        });
    var file = req.files.uploaded_image;
    console.log()
    var img_name=Date.now() + path.extname(file.name);
    if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
        file.mv('public/uploads/'+img_name)
    }

    // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const penyelenggara = new Penyelenggara({
    email_penyelenggara : req.body.email_penyelenggara,
    nama_penyelenggara : req.body.nama_penyelenggara,
    password_penyelenggara : req.body.password_penyelenggara,
    status_penyelenggara : req.body.status_penyelenggara,
    hp_penyelenggara : req.body.hp_penyelenggara,
    gambar_penyelenggara : req.body.gambar_penyelenggara,
    status : req.body.status
  });

  Penyelenggara.create(penyelenggara, (err, data) => {
    if (err)
      res.status(500).send({
        success: false,
        data: null,
        message:
          err.message || "Some error occurred while creating the Penyelenggara."
      });
    else res.send({success:true,data: null, message: "Penyelenggara berhasil dibuat"});
  });

};

// Retrieve all Admin from the database.
exports.findAll = (req, res) => {
    Penyelenggara.getAll((err, data) => {
        if (err)
          res.status(500).send({
              success: false,
              data: null,
                message:
                err.message || "Some error occurred while retrieving penyelenggara."
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
    new Penyelenggara(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            success: false,
            data: null,
            message: `Not found penyelenggara with id ${req.params.penyelenggaraId}.`
          });
        } else {
          res.status(500).send({
            success: false,
            data: null,
            message: "Error updating penyelenggara with id " + req.params.penyelenggaraId
          });
        }
      } else res.send({success:true,data: null, message: "Penyelenggara berhasil di update"});
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Penyelenggara.remove(req.params.penyelenggaraId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          success: false,
          data: null,
          message: `Not found Penyelenggara with id ${req.params.penyelenggaraId}.`
        });
      } else {
        res.status(500).send({
          success: false,
          data: null,
          message: "Could not delete Penyelenggara with id " + req.params.penyelenggaraId
        });
      }
    } else res.send({success:true,data: null, message: "Admin berhasil di delete"});
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  
};