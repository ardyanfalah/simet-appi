const Instruktur = require("../models/instruktur.model.js");
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
  const instruktur = new Instruktur({
    email_instruktur : req.body.email_instruktur,
    nama_instruktur : req.body.nama_instruktur,
    hp_instruktur : req.body.hp_instruktur,
    gambar_instruktur : req.body.gambar_instruktur,
    status : req.body.status
  });

  Instruktur.create(instruktur, (err, data) => {
    if (err)
      res.status(500).send({
        success: false,
        data: null,
        message:
          err.message || "Some error occurred while creating the Instruktur."
      });
    else res.send({success:true,data: null, message: "Instruktur berhasil dibuat"});
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
  const instruktur = new Instruktur({
    email_instruktur : data.email_instruktur,
    nama_instruktur : data.nama_instruktur,
    hp_instruktur : data.hp_instruktur,
    gambar_instruktur : img_name,
    status : 'Active'
  });

  Instruktur.create(instruktur, (err, data) => {
    if (err)
      res.status(500).send({
        success: false,
        data: null,
        message:
          err.message || "Some error occurred while creating the Instruktur."
      });
    else res.send({success:true,data: null, message: "Instruktur berhasil dibuat"});
  });

};

// Retrieve all Admin from the database.
exports.findAll = (req, res) => {
    Instruktur.getAll((err, data) => {
        if (err)
          res.status(500).send({
              success: false,
              data: null,
                message:
                err.message || "Some error occurred while retrieving Instruktur."
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
      var img_name=data.gambar_instruktur;
    }
      

    // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const instruktur = new Instruktur({
    email_instruktur : data.email_instruktur,
    nama_instruktur : data.nama_instruktur,
    hp_instruktur : data.hp_instruktur,
    gambar_instruktur : img_name,
    status : data.status
  });

  Instruktur.updateById(
    data.id_instruktur,
    Instruktur,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            success: false,
            data: null,
            message: `Not found instruktur with id ${data.id_instruktur}.`
          });
        } else {
          res.status(500).send({
            success: false,
            data: null,
            message: "Error updating instruktur with id " +data.id_instruktur
          });
        }
      } else res.send({success:true,data: null, message: "Instruktur berhasil di update"});
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Instruktur.remove(req.params.instrukturId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          success: false,
          data: null,
          message: `Not found Instruktur with id ${req.params.instrukturId}.`
        });
      } else {
        res.status(500).send({
          success: false,
          data: null,
          message: "Could not delete Instruktur with id " + req.params.instrukturId
        });
      }
    } else res.send({success:true,data: null, message: "Data instruktur berhasil di delete"});
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  
};