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

const updateCustomer = (async (id) => {
	let string = "";
	$( "input" ).filter(function (index) {
		string = string + this.name + "=" + this.value + "&";
	});

	string = string + "customer-index=" + id;
	
	const options = {
  		method: 'put',
  		headers: {
    		'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
  		},
  		body: string
	}
	
	const response = await (fetch('/customers/update/' + id, options ));
	const data = await response.text();

	if (data === "DONE") {
		window.location.href=`/customers/${id}`;
	}
}); 

const updateProduct = (async (id) => {
	console.log("3333333333333333")


	let string = "";
	$( "input" ).filter(function (index) {
		string = string + this.name + "=" + this.value + "&";
	});

	string = string + "product-index=" + id;
	console.log(string)


	const options = {
  		method: 'put',
  		headers: {
    		'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
  		},
  		body: string
	}
	console.log(id)

	const response = await (fetch('/products/update/' + id, options ));
	const data = await response.text();
	console.log(data)
	if (data === "DONE") {
		window.location.href=`/products/${id}`;
	}
}); 
