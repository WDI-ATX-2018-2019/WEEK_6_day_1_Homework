const express = require('express');
const app = express();
let PORT = 3000;
app.set('view engine', 'pug');
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));

const customers_router = require('./customers/router.js')
const products_router = require('./products/router.js')

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

let router = express.Router();

app.use("/products",products_router);
app.use("/customers",customers_router);

app.get("/", function(req,res) {
	res.send("<h1>My pages works Pug Style</h1><div><a href='customers/'>Link to Customers</div><div><a href='products/'>Link to Products</div>");
});

// LISTENER
const server = app.listen(PORT, function() {
  console.log('Server running on port: ', PORT);
})

module.exports = app;