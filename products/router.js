let express = require('express');
let router = express.Router();
let model = require('./models.js');



router.get("/", function (request, response) {
	let products = model.getProducts()
	response.render('index_products', { products: products })
	
});

router.get("/add/products/", function(request, response) {
	response.render('_post_page_products')
});

router.get("/delete/:id", function(request, response) {
	let productIndex = model.getProductIndex(request.params.index);
	response.render('_delete_page_products', { entries: productIndex, index: request.params.index })
});

router.get("/:index", function (request, response) {
	let productIndex = model.getProductIndex(request.params.index);
	response.render('_list_products', { entries: productIndex, index: request.params.index  });
});

router.post('/add/products', (req,res) => {
	let newProductname = req.body['product-name'];
	let newProductCost = req.body['product-cost'];
	let newProductColor = req.body['product-color'];
	let newProductOnsale = req.body['product-onsale'];
	model.addProduct( {productName: newProductname, cost: newProductCost, color: newProductColor, onSale: newProductOnsale });    
	res.redirect('/products');
})

router.delete('/delete/:id', (req,res) => {
	model.deleteProduct(req.params.id);
	res.redirect('/products');  //redirect will not work when using AJAX to make the delete request.
	res.end();
})

module.exports = router;