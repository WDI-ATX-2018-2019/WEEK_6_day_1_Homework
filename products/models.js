const products = [
  {
    productName: 'Makeup',
    cost: 19,
    color: 'beige',
    onSale: false
  },
  {
    productName: 'Barbies',
    cost: 15,
    color: 'blue',
    onSale: true
  },
  {
    productName: 'HoTs',
    cost: 20,
    color: 'blue',
    onSale: true
  },
  {
    productName: 'Minecraft',
    cost: 25,
    color: 'green',
    onSale: false
  },
  {
    productName: 'Sewing Machine',
    cost: 100,
    color: 'white',
    onSale: true
  },
  {
    productName: 'Baby Food',
    cost: 21,
    color: 'yellow',
    onSale: false
  },
  {
    productName: 'LOL',
    cost: 10,
    color: 'pink',
    onSale: false
  }
]
module.exports = {
  getProducts() {
    return products;
  },
  getProductIndex(index) {
    return products[index];
  },
  addProduct(obj) {
    products.push(obj);
  },
  deleteProducts(index) {
    products.splice(index, 1);    
  }
}