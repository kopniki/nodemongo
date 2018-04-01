const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		
		return console.log('unable to connect to database');
	}
	console.log('successfully connected to database');
	
	const db =client.db('TodoApp');
	
	db.collection('Users').find({name:'savi'}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs, undefined,2)),(err)=>{
			console.log('unable to fetch data',err)
		}
	});
	
	
	client.close();
	
	
});