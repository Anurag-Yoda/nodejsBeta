const http = require("http");
const express = require("express");
const adminRoutes = require("./routes/admin"); 
const customerRoutes = require("./routes/shop"); 
const app = express();

app.use("/admin", adminRoutes);
app.use("/customer",customerRoutes )

app.use('/',((req,res,next) => {
  console.log("keh kelunga");
  res.send("<h1>Hey yo Nigga</h1>")
}));



app.listen(3000);

