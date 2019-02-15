
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const customersRouter = require('./customers/router')
const productsRouter = require('./products/router')
const app = express()

const PORT = 9000

let customersRouter = require('./customers/router');
let productsRouter = require('./products/router');
let app = express();

app.set('view-engine', 'ejs');

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/customers', customersRouter);
app.use('/products', productsRouter);

app.listen(PORT, function() {
	console.log('Server running on port: ' + PORT);
});



app.listen(PORT, function() {
  console.log('My server is set up and running on port: ', PORT);
})