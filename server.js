const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const fileUpload = require('express-fileupload')
const multer = require('multer');
const app = express();
const path = require("path");


app.use(cors());
app.options('*', cors());
// parse requests of content-type: application/json

app.use(fileUpload());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

function validateIndex(req, res, next) {
  if (
    req.query.index !== undefined &&
    contacts[req.query.index] === undefined
  ) {
    res.send({ success: false });
  } else {
    next();
  }
}

app.use(validateIndex);
app.use(express.json());

require("./src/routes/admin.routes.js")(app);
require("./src/routes/penyelenggara.routes.js")(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});