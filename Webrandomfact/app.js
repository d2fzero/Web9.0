const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const viewRouter = require('./routers/viewRouter');
const apiUser=require('./routers/apiUserRouter');
const apiQuestion = require('./routers/apiQuestionsRouter');
const apiAnswer=require('./routers/apiAnswersRouter');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoose=require('mongoose');
const config = require('./config.json');

let app = express();
let connectionString = process.env.PORT ? config.production.connectionString : config.development.connectionString;

let port = process.env.PORT ? process.env.PORT : config.development.port;

app.engine("handlebars", handlebars({ defaultLayout : "main"}));
app.set("view engine", "handlebars");
app.use(session({
  secret: 'hotgirl',
  cookie: {},
  resave: false,
  saveUninitialized: true,
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended : true }) );
app.use(bodyParser.json({ extended: true }) );
app.use('/',viewRouter);
app.use('/api/users',apiUser);
app.use('/api/questions',apiQuestion);
app.use('/api/answers',apiAnswer);
// app.use('/add',addRouter);
app.use(express.static(__dirname + '/public'));
mongoose.connect(connectionString, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connect db success");
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Website is up");
  }
});
