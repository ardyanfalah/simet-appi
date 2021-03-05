module.exports = app => {
    const admins = require("../controllers/admin.controller.js");
  
    // Create a new admin
    app.post("/admins", admins.create);
  
    // Retrieve all admins
    app.get("/admins", admins.findAll);
  
    // // Retrieve a single admin with adminId
    // app.get("/admins/:adminId", admins.findOne);
  
    // // Update a admin with adminId
    app.put("/admins/:adminId", admins.update);
  
    // Delete a admin with adminId
    app.delete("/admins/:adminId", admins.delete);
  
    // // Create a new admin
    // app.delete("/admins", admins.deleteAll);
  };