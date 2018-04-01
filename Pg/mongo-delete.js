const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		
		return console.log('unable to connect to database');
	}
	console.log('successfully connected to database');
	
	const db =client.db('TodoApp');
	
/*	db.collection('Users').deleteMany({name:'savi'}).then((docs)=>{
		console.log(JSON.stringify(docs, undefined,2)),(err)=>{
			console.log('unable to delete data',err)
		}
	});*/
	
	
	/*db.collection('Users').deleteMany({_id:new ObjectId('5ac0b7c73da4de2ac54645ce')}).then((docs)=>{
		console.log(JSON.stringify(docs, undefined,2)),(err)=>{
			console.log('unable to delete data',err)
		}
	});*/
	
	db.collection('Users').findOneAndDelete({_id: new ObjectId('5ac0ac3f15fb23440c03f60f') }).then((docs)=>{
		
			console.log(' deleted data',docs)
		
	});
	//sObjectId("5ac0ac3f15fb23440c03f60f")
	//ObjectId("5ac0b7c73da4de2ac54645ce")
	//client.close();
	
	
});