
let title = 'Customers'
let customer = [

{
	'Name': 'Daniel',
	'Email': 'daniel@daniel.com',
	'Phone': '987-7890',
	'Address': '145 Whatever Ln. This, Tx 67890'
},
{
	'Name': 'Jessica',
	'Email': 'jessica@jessica.com',
	'Phone': '678-0987',
	'Address': '178 Not Here Ave. Golf, Fl 89076'
},
{
	'Name': 'Steve',
	'Email': 'steve@steve.com',
	'Phone': '678-5634',
	'Address': '678 Go Away St. Palace, Wi 55786'
},
{
	'Name': 'Amy',
	'Email': 'amy@amy.com',
	'Phone': '567-0981',
	'Address': '487 Home Ave. Speed, Ca 77688'
}

]


module.exports = {
	title,
	getCustomers(){
		return customer
	},
	getCustomers(id){
		return customer[id]
	},
	updateCustomers(id, new){
		s
		
	},
	removeCustomers(){
		customer.splice()
	}

}