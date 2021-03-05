module.exports = app => {
    const penyelenggara = require("../controllers/penyelenggara.controller.js");
  
    // Create a new admin
    // app.post("/penyelenggara", penyelenggara.create);
  
    app.post("/penyelenggara/upload", penyelenggara.upload);

    app.get("/penyelenggara/download", penyelenggara.download);

    // // Retrieve all admins
    // app.get("/penyelenggara", admins.findAll);
  
    // // Retrieve a single admin with adminId
    // // app.get("/admins/:adminId", admins.findOne);
  
    // // Update a admin with adminId
    // app.put("/penyelenggara/:adminId", admins.update);
  
    // // Delete a admin with adminId
    // app.delete("/penyelenggara/:adminId", admins.delete);
  
    // // Create a new admin
    // app.delete("/admins", admins.deleteAll);
  };