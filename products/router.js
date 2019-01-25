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

router.get("/update/:id", function(request, response) {
	let productIndex = model.getProductIndex(request.params.id);
	response.render('_update_products', { entries: productIndex, index: request.params.id })
});

router.post('/add/products', (req,res) => {
	let newProductname = req.body['product-name'];
	let newProductCost = req.body['product-cost'];
	let newProductColor = req.body['product-color'];
	let newProductOnsale = req.body['product-onsale'];
	model.addProduct( {productName: newProductname, cost: newProductCost, color: newProductColor, onSale: newProductOnsale });    
	res.redirect('/products');
})

router.put('/update/:id', (req,res) => {
	let newProductname = req.body['product-name'];
	let newProductCost = req.body['product-cost'];
	let newProductColor = req.body['product-color'];
	let newProductOnsale = req.body['product-onsale'];
	let updateIndex = req.body['product-index'];
	model.updateProduct( {productName: newProductname, cost: newProductCost, color: newProductColor, onSale: newProductOnsale, index: updateIndex });    
	res.send("DONE");
})

router.delete('/delete/:id', (req,res) => {
	model.deleteProducts(req.params.id);
	res.send("DONE");
})

module.exports = router;