const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		
		return console.log('unable to connect to database');
	}
	console.log('successfully connected to database');
	
	const db =client.db('TodoApp');
	
	/*db.collection('Todos').insertOne({
		text:'something to do',
		completed:'false'
	},(err,result)=>{
		if(err){
			return console.log('unable to connect',err);
		}
		console.log('inserted successfully', JSON.stringify(result.ops ,undefined ,2));
	});
	*/
	db.collection('Users').insertOne({
		name:'shivani',
		age:22,
		city:'kolhapur'
	},(err,result)=>{
		if(err){
			return console.log('unable to connect',err);
		}
		console.log('inserted successfully', JSON.stringify(result.ops ,undefined ,2));
	});
	
	
	
   client.close();
	
});