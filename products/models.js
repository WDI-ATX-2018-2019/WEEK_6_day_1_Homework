
let title = 'Products'
let products = [
{
	'Name': 'Half used bar of soap',
	'Price': '$77.89',
	'Weight': '3 lbs',
	'Size': '3" X 6"'
},
{
	'Name': 'Knock off Yeti cooler, called Jeti',
	'Price': '$23.67',
	'Weight': '19 lbs',
	'Size': '10" X 11"'
},
{
	'Name': 'Pants',
	'Price': '$165.49',
	'Weight': '2 lbs',
	'Size': '45 X 36'
},
{
	'Name': 'A left shoe',
	'Price': '$1.78',
	'Weight': '1 lb',
	'Size': '19'
}
]

module.exports = {
	title,
	getProducts() {
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