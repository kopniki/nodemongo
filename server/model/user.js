var mongoose = require('mongoose');
var user = mongoose.model('user',{
	
	name:{
		type: String,
		required :true,
		
	},
	email :{
		type : String ,
		required : true,
		trim :false
	}
});

module.exports={user};