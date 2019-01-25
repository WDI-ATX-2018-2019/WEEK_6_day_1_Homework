function deleteProduct(id) = async () => {
	/*
	var request = new XMLHttpRequest();
	request.open('DELETE', '/products/delete/' + id,  false);
	request.send();
	request.done(window.location.href="/productss");
	//window.location.href="/pokemon"; 
	//console.log('response head: ' + request.responseText.substring(0, 15) + '...');
	*/
	console.log("sdfdsfsdf");

	const response = await fetch('/products/delete/' + id, { method: 'delete'})
  	const data = await response.text() 
  	//const users = await (data => console.log(data))
  	console.log(data)

  	
}

/*
fetch('https://example.com/delete-item/', {
  method: 'DELETE',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({id: '5bdcdfa40f0a326f858feae0'})
})
.then(res => res.text())
.then(res => alert(res))

const getFirstUserData = async () => {
  const response = await fetch('/users.json') // get users list
  const users = await response.json() // parse JSON
  const user = users[0] // pick first user
  const userResponse = await fetch(`/users/${user.name}`) // get user data
  const userData = await user.json() // parse JSON
  return userData
}

getFirstUserData()
*/


const deleteProduct2 = (async (id) => {
  //console.log("dsfdsf");
  const response = await (fetch('/products/delete/' + id, { method: 'delete', redirect: 'follow'}));
  //console.log(response.location);
  //console.log(response.headers['Location']);
  //if( response.redirected) {
        //location.href = response.url;
    //    console.log(response.url);
        //fetch(response.url, { method: 'get'})
     //   window.location.href=response.url;
   //   }
      //if (response.location) {
      //  console.log(response.url);
     //   console.log("5555555555555555555")
     // }
  const data = await response.text();
  console.log(data);   //data is empty on an res.end()
  if (data === "DONE") {
    window.location.href="/products";
  }

  //console.log(response.body);
  //console.log("dsfdsf");
  //console.log('status: ', response.status);
  //response.redirect('/products');
}); 

router.delete('/delete/:id', (req,res) => {
  model.deleteProducts(req.params.id);
  //res.set( { 'method': 'GET'} );
  //req.method = 'GET';
  //res.redirect(301,'http\://localhost\:3000/products');  //redirect will not work when using AJAX to make the delete request.
  
  res.send("DONE");
  //res.status(200);
  //res.end();
})
