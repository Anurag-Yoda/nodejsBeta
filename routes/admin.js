const express = require("express");
const path = require("path");

const router = express.Router();
router.use('/add-product',((req,res,next) => {
    console.log("Fuck em all");
    res.sendFile(path.join(__dirname, "../","views","add-product.html"));
  }));



module.exports = router;