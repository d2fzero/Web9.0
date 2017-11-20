const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const viewRouter = require('./routers/viewRouter');
const addRouter = require('./routers/addRouter');
const mongoose=require('mongoose');
let app = express();
app.engine("handlebars", handlebars({ defaultLayout : "main"}));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended : true }) );
app.use(bodyParser.json({ extended: true }) );
app.use('/',viewRouter);
app.use('/add',addRouter);
app.use(express.static(__dirname + '/public'));
mongoose.connect("mongodb://localhost/fact", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connect db success");
  }
});

app.listen(6969, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Localhost started on port 6969");
  }
});
