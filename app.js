const path = require("path");
const express = require("express");
const adminData = require("./routes/admin"); 
const customerRoutes = require("./routes/shop"); 
const app = express();
const bodyParser =  require("body-parser");
const expressHbs = require("express-handlebars");



app.use(express.static(path.join(__dirname,"public")));

app.engine('handlebars', expressHbs());
app.set('view engine','handlebars');
app.set('views','views');


app.use(bodyParser.urlencoded({extended:false}));

app.use("/admin", adminData.routes);
app.use(customerRoutes)

app.use(((req,res,next) => {
 
  res.status(404).render('404', {pageTitle: "404 Page"});
}));



app.listen(3000);

