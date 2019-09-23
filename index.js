var express = require('express');
var pug = require('pug');
var bodyparser = require("body-parser");
var vinamikRouter = require('./router/router.vinamik');
var authRouter = require('./router/auth.router');
var managementRouter = require('./router/management.router');
var cookieParser = require('cookie-parser')
var authMiddleware = require('./middleware/auth.middleware')
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/express-demo',  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

var app = express();

var port = 3000;

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser())

app.use('/item', vinamikRouter)
app.use('/auth', authRouter)
app.use('/management-page',authMiddleware.requireAuth, managementRouter)

app.use(express.static('public'))

app.get('/', function(req, res){
	res.render("index")
})

app.listen(port, function(req, res){
	console.log("vinamik port 3000")
})