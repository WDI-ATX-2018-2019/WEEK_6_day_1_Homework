const express = require("express")
const app = express()
let PORT = 4000
const router = require('./customers/router.js')

app.use('/customers', router)

app.listen(PORT, function() {
	console.log('listening at port: ' + PORT)
})




