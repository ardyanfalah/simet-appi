module.exports = app => {
    const mitra = require("../controllers/mitra.controller.js");
  
    // Create a new mitra
    app.post("/mitra", mitra.create);
  
    app.post("/mitra/upload", mitra.upload);

    app.get("/download/:imageId", mitra.download);

    // Retrieve all mitra
    app.get("/mitras", mitra.findAll);
  
    // // Retrieve a single mitra with mitraId
    // // app.get("/mitra/:mitraId", mitra.findOne);
  
    // // Update a mitra with mitraId
    app.post("/mitra/update", mitra.update);
  
    // // Delete a mitra with mitraId
    app.delete("/mitra/:mitraId", mitra.delete);
  
    // // Create a new mitra
    // app.delete("/mitra", mitra.deleteAll);
  };