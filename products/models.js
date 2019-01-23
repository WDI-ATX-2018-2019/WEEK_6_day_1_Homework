let title = 'Products';
let products = [
	{
		name: 'Swankey Higgenbottom',
		price: 3.5,
		size: 'About 5',
		weight: '3 tons, but also 1 pound'
	},
	{
		name: 'Hoofen Floofer',
		price: 300000,
		size: '3 nanometers',
		weight: 'The mass of the sun'
	},
	{
		name: '12 Whole Carrots, I Promise',
		price: Infinity,
		size: 'The size of 12 carrots',
		weight: '1'
	},
	{
		name: 'Belly Button Lint',
		price: 100,
		size: '12 kilometers',
		weight: '700 Gigatons'
	}
];

module.exports = {
	title,
	getProducts() {
		console.log('Hello');
		return products;
	},
	getProduct(id) {
		return products[id];
	},
	removeProduct(id) {
		products.splice(id, 1);
	},
	editProduct(id, newProduct) {
		products[id] = newProduct;
	},
	createProduct(newProduct) {
		products.push(newProduct);
	}
};
