let express = require('express');
let router = express.Router();
let model = require('./models.js');

router.get("/", function (request, response) {
	let customers = model.getCustomers();
	response.render('index_customers', { customers: customers })
});

router.get("/:index", function (request, response) {
	let customerIndex = model.getCustomerIndex(request.params.index);
	response.render('_list_customers', { entries: customerIndex, index: request.params.index  });
});

module.exports = router;