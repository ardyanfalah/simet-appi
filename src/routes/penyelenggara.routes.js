module.exports = app => {
    const penyelenggara = require("../controllers/penyelenggara.controller.js");
  
    // Create a new penyelenggara
    app.post("/penyelenggara", penyelenggara.create);
  
    app.post("/penyelenggara/upload", penyelenggara.upload);

    app.get("/download/:imageId", penyelenggara.download);

    // Retrieve all penyelenggara
    app.get("/penyelenggara", penyelenggara.findAll);
  
    // // Retrieve a single penyelenggara with penyelenggaraId
    // // app.get("/penyelenggara/:penyelenggaraId", penyelenggara.findOne);
  
    // // Update a penyelenggara with penyelenggaraId
    app.post("/penyelenggara/update", penyelenggara.update);
  
    // // Delete a penyelenggara with penyelenggaraId
    app.delete("/penyelenggara/:penyelenggaraId", penyelenggara.delete);
  
    // // Create a new penyelenggara
    // app.delete("/penyelenggara", penyelenggara.deleteAll);
  };