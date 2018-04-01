
const express = require('express');
const bodyparser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {todo} =require('./model/todo');
var {user}= require('./model/user');

var app= express();


app.use(bodyparser.json());

app.post('/users',(req,res)=>{
	console.log(req.body);
	var newuser= new user({
		name: req.body.name,
		email:req.body.email
	});
	
	newuser.save().then((doc)=>{
		res.status(200).send(doc);
	},(e)=>{
		res.send(e);
	});
	
	
});

app.listen(3000,()=>{
	console.log('listening on port 3000')
})




/*var newtodo = new todo({
	name : 'bappa',
	age: 10,
	city:'kailash'
});


newtodo.save().then((res)=>{
	console.log('data saved',res)
},(e)=>{
	console.log(e)
});*/



/*

var newuser= new user({
	name: 'nikitapatil',
	email:' nipatil@manh.com '
});

newuser.save().then((res)=>{
	console.log('saved',res)
},(e)=>{
	console.log('unable to log',e)
})
*/
