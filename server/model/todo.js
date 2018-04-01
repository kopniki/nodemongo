var mongoose = require('mongoose');
var todo = mongoose.model('todo',{
	
	name:{
		type: String
	},
	age :{
		type : Number 
	},
	city:{
		type: String
	}
	
});


module.exports={todo};
