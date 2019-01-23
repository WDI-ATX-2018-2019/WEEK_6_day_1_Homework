let title = 'Customers';
let customers = [
	{
		name: 'Rob Boss',
		email: 'smorf@hothoo.com',
		phoneNumber: '555-555-5555',
		address: '3265 South Spaghetti Code Lane'
	},
	{
		name: 'Smorc',
		email: 'nunyabusniness@nunya.business',
		phoneNumber: 'Phone number too complicated for mere mortals',
		address: 'mars. that is all'
	},
	{
		name: 'Groof',
		email: 'reallyseriousclown@notajoke.com',
		phoneNumber: '8675309',
		address: 'a box'
	},
	{
		name: '7',
		email: 'kid@napster.com',
		phoneNumber: '0, literally the first phone',
		address: 'somewhere in the middle of the atlantic'
	}
];

module.exports = {
	title,
	getCustomers() {
		return customers;
	},
	getCustomer(id) {
		return customers[id];
	},
	removeCustomer(id) {
		customers.splice(id, 1);
	},
	editCustomer(id, newCustomer) {
		customers[id] = newCustomer;
	},
	createCustomer(newCustomer) {
		customers.push(newCustomer);
	}
};
