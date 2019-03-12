
14 lines (10 sloc) 314 Bytes
const express = require('express')
const router = express.Router()
const customerData = require('./models.js')


router.get('/', (request, response) =>{
	response.send(customerData.getCustomers())
})

router.get('/:id', (request, response) =>{
	response.send(customerData.getCustomer())
})

module.exports = router