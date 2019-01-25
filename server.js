


//require files.  Use npm install to get these!
const express = require('express');
const morgan = require('morgan');
const compression = require('compression')
const app = express();
const path = require('path');

//allow us to define the port on the command line!!!
let PORT = 3000;
if ((process.argv[2]) !== "undefined") {
	let portNum = parseInt(process.argv[2])
	if ( typeof(portNum) === "number" && portNum > 1000) {
		PORT = process.argv[2];
	}
}

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname,'public')));

//Global variable for port. Rather use a define like C!!!


// setup the logger.  Will make a file in the current directory
let fs = require('fs');
let stream = fs.createWriteStream(path.join(__dirname, "middleware.log"), {'flag': 'a'});  //open, append the file.
app.use(morgan('combined', { stream: stream }));

//setup compression.  There is a default constructor but I am not modifing the default
//this will say Content-Encoding: gzip in the raw header.
app.use(compression())

const customers_router = require('./customers/router.js')
const products_router = require('./products/router.js')

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

let router = express.Router();

app.use("/products",products_router);
app.use("/customers",customers_router);

app.get("/", function(req,res) {
	res.render("_main_page");
});

// LISTENER
const server = app.listen(PORT, function() {
  console.log('Server running on port: ', PORT);
})

module.exports = app;