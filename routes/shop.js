const express = require("express");
const path =  require("path");
const router = express.Router();
router.use('/shop',((req,res,next) => {
    console.log("Fuck em all");
    res.sendFile(path.join(__dirname, "../","views","shop.html"));
  }));



module.exports = router;