const express = require('express')
const app = express()

const bodyparser = require('body-parser')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

let data = {};

app.get('/login',(req,res)=>{
	res.sendFile(__dirname+'/login.html')
	app.post('/budget-tracker',(req,res)=>{
		data = req.body
		res.sendFile(__dirname+'/page2.html')
	})
})

app.get('/style.css',(req,res)=>{
	res.sendFile(__dirname+'/style.css')
})

app.get('/script.js',(req,res)=>{
	res.sendFile(__dirname+'/script.js')
})
app.get('/getUser',(req,res)=>{
	res.send(data)
})

app.listen(3000)
