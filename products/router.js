let express = require('express');
let router = express.Router();
let model = require('./models.js');

router.get("/", function (request, response) {
	let products = model.getProducts()
	response.render('index_products', { products: products })
	
});

router.get("/:index", function (request, response) {
	let productIndex = model.getProductIndex(request.params.index);
	response.render('_list_products', { entries: productIndex, index: request.params.index  });
});

module.exports = router;