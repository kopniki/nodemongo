const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		
		return console.log('unable to connect to database');
	}
	console.log('successfully connected to database');
	
	const db =client.db('TodoApp');
	
	
	db.collection('Users').findOneAndUpdate({name:'shiva'},{$inc :{age :2} , $set: {name:'shivani'}}).then((res)=>{
		console.log('updated',res);
	})
	
	
	
  // client.close();
	
});