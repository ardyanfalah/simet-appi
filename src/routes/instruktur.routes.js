module.exports = app => {
    const instruktur = require("../controllers/instruktur.controller.js");
  
    // Create a new instruktur
    app.post("/instruktur", instruktur.create);
  
    app.post("/instruktur/upload", instruktur.upload);

    app.get("/download/:imageId", instruktur.download);

    // Retrieve all instruktur
    app.get("/instrukturs", instruktur.findAll);
  
    // // Retrieve a single instruktur with instrukturId
    // // app.get("/instruktur/:instrukturId", instruktur.findOne);
  
    // // Update a instruktur with instrukturId
    app.post("/instruktur/update", instruktur.update);
  
    // // Delete a instruktur with instrukturId
    app.delete("/instruktur/:instrukturId", instruktur.delete);
  
    // // Create a new instruktur
    // app.delete("/instruktur", instruktur.deleteAll);
  };