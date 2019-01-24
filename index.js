const express = require("express")
const app = express()
let PORT = 9000

app.set('view','./views')
app.set('view engine','pug')



















app.listen(PORT, function() {
	console.log('listening at port: ' + PORT)
})




