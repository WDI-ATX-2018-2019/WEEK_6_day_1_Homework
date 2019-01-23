function deleteCustomer(id) {
	var request = new XMLHttpRequest();
	request.open('DELETE', '/customers/delete/' + id, /* async = */ false);
	request.send();
	request.done(window.location.href="/customers");
	//window.location.href="/pokemon"; 
	//console.log('response head: ' + request.responseText.substring(0, 15) + '...');
}
function deleteProduct(id) {
	var request = new XMLHttpRequest();
	request.open('DELETE', '/products/delete/' + id, /* async = */ false);
	request.send();
	request.done(window.location.href="/productss");
	//window.location.href="/pokemon"; 
	//console.log('response head: ' + request.responseText.substring(0, 15) + '...');
}