const express = require('express')
const router = express.Router()
const customers = require('./data.js')
const cF = require('./models.js')

console.log(cF.getCustomer(0))


router.get('/',(request,response)=>{
	response.send(customers)
})
router.get('/:id' , (request,response)=>{
	let id = request.params.id
	response.send(cF.getCustomer(id))
})
router.put('/newCustomer/:newName/:newAge/:newHeight/:newWeight',(request,response)=>{
	let newName = request.params.newName
	let newAge = request.params.newAge
	let newHeight = request.params.newHeight
	let newWeight = request.params.newWeight
	response.send(cF.addCustomer(newName,newAge,newHeight,newWeight))
})
router.post('/changeAge/:id/:newAge', (request,response)=>{
	let id = request.params.id
	let newAge = request.params.newAge
	response.send(cF.changeAge(id,newAge))
})


module.exports = router 