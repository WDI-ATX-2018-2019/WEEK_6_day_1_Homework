let express = require('express');
let router = express.Router();
let products = require('./models');
let newProduct = 0;

router.get('/', (request, response) => {
	let viewData = products.getProducts();
	response.render('../views/index.ejs', {
		items: viewData,
		title: products.title
	});
});
router.get('/new', (request, response) => {
	response.render('../views/new.ejs', {
		action: '/products',
		formTitles: ['Name', 'Price', 'Size', 'Weight'],
		title: products.title
	});
});
router.get('/:id/edit', (request, response) => {
	newProduct = request.params.id;
	response.render('../views/edit.ejs', {
		action: `/products/${newProduct}`,
		formTitles: ['Name', 'Price', 'Size', 'Weight']
	});
});
router.get('/:id', (request, response) => {
	let id = request.params.id;
	let viewData = products.getProduct(id);
	response.render('../views/show.ejs', { item: viewData });
});

router.post(`/:id`, (request, response) => {
	let product = productCreate(
		request.body['name'],
		request.body['email'],
		request.body['phoneNumber'],
		request.body['address']
	);
	products.editProduct(newProduct, product);
	response.redirect('/products');
});
router.post('/', (request, response) => {
	let product = productCreate(
		request.body['name'],
		request.body['email'],
		request.body['phoneNumber'],
		request.body['address']
	);

	products.createProduct(product);
	response.redirect('/products');
});

router.delete('/:id/delete', (request, response) => {
	let id = request.params.id;
	products.removeProduct(id);
	response.redirect('/products');
});

function productCreate(newName, newPrice, newSize, newWeight) {
	let product = {
		name: newName,
		price: newPrice,
		size: newSize,
		weight: newWeight
	};
	return product;
}

module.exports = router;
