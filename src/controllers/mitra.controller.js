const Mitra = require("../models/mitra.model.js");
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
  const mitra = new Mitra({
    email_mitra : req.body.email_mitra,
    nama_mitra : req.body.nama_mitra,
    gambar_mitra : req.body.gambar_mitra,
    status : req.body.status
  });

  Mitra.create(mitra, (err, data) => {
    if (err)
      res.status(500).send({
        success: false,
        data: null,
        message:
          err.message || "Some error occurred while creating the Mitra."
      });
    else res.send({success:true,data: null, message: "Mitra berhasil dibuat"});
  });

};

exports.download = (req,res)=>{

    const file = `${process.cwd()}/public/uploads/`+req.params.imageId;
    console.log(file)
    res.download(file); // Set disposition and send it.
}
// Create and Save a new Customer
exports.create = (req, res) => {
  
  var data = JSON.parse(req.body.data);
    if (!req.files)
        res.status(400).send({
            success: false,
            data: null,
            message:
            err.message || "No files were uploaded."
        });
    var file = req.files.image;
    console.log(file)
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
  const mitra = new Mitra({
    email_mitra : data.email_mitra,
    nama_mitra : data.nama_mitra,
    hp_mitra : data.hp_mitra,
    gambar_mitra : img_name,
    status : 'Active'
  });

  Mitra.create(mitra, (err, data) => {
    if (err)
      res.status(500).send({
        success: false,
        data: null,
        message:
          err.message || "Some error occurred while creating the Mitra."
      });
    else res.send({success:true,data: null, message: "Mitra berhasil dibuat"});
  });

};

// Retrieve all Admin from the database.
exports.findAll = (req, res) => {
    Mitra.getAll((err, data) => {
        if (err)
          res.status(500).send({
              success: false,
              data: null,
                message:
                err.message || "Some error occurred while retrieving mitra."
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
  var data = JSON.parse(req.body.data);
    if (req.files != null && req.files != undefined){
      var file = req.files.image;
      console.log(file)
      var img_name=Date.now() + path.extname(file.name);
      if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
          file.mv('public/uploads/'+img_name)
      }
    } else {
      var img_name=data.gambar_mitra;
    }
      

    // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const mitra = new Mitra({
    email_mitra : data.email_mitra,
    nama_mitra : data.nama_mitra,
    hp_mitra : data.hp_mitra,
    gambar_mitra : img_name,
    status : data.status
  });

  Mitra.updateById(
    data.id_mitra,
    mitra,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            success: false,
            data: null,
            message: `Not found mitra with id ${data.id_mitra}.`
          });
        } else {
          res.status(500).send({
            success: false,
            data: null,
            message: "Error updating mitra with id " +data.id_mitra
          });
        }
      } else res.send({success:true,data: null, message: "Mitra berhasil di update"});
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Mitra.remove(req.params.mitraId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          success: false,
          data: null,
          message: `Not found Mitra with id ${req.params.mitraId}.`
        });
      } else {
        res.status(500).send({
          success: false,
          data: null,
          message: "Could not delete Mitra with id " + req.params.mitraId
        });
      }
    } else res.send({success:true,data: null, message: "Mitra berhasil di delete"});
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  
};