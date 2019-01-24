function deleteCustomer(id) {
	var request = new XMLHttpRequest();
	request.open('DELETE', '/customers/delete/' + id, /* async = */ false);
	request.send();
	request.done(window.location.href="/customers");
	
};

//The old AJAX way
function deleteProduct(id) {
	var request = new XMLHttpRequest();
	request.open('DELETE', '/products/delete/' + id, /* async = */ false);
	request.send();
	request.done(window.location.href="/products");
};

//This is the new and improved fetch with ES7 async (which is better than promises!)
const deleteProduct2 = (async (id) => {
	const response = await (fetch('/products/delete/' + id, { method: 'delete'}));
	const data = await response.text();
	console.log(data);   //data is empty on an res.end()
	if (data === "DONE") {
		window.location.href="/products";
	}
}); 

const deleteCustomer2 = (async (id) => {
	const response = await (fetch('/customers/delete/' + id, { method: 'delete'}));
	const data = await response.text();
	console.log(data);   //data is empty on an res.end()
	if (data === "DONE") {
		window.location.href="/customers";
	}
}); 
