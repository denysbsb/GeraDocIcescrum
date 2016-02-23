var request = require('request');
var baseURI = 'http://177.69.58.70:8888/icescrum/ws/p';
var api = {
	request:function(projectName){
		var self = this,
			uri =self.makeURI(projectName);
		request({
		    headers: {
		      'Content-Type': 'application/json'
		    },
     		'auth': {
		    'user': 'denys.araujo',
		    'pass': 'a1920212223',
		    'sendImmediately': false
		  	},
		    uri: uri,
		    method: 'GET'
		  }, function(req,res,body){
		  	self.processo(req,res,body);
		  });
	},

	processo:function(req,res,body){
		console.log(body);
	},

	makeURI:function(projectName){

		var uri = [
			baseURI,
			projectName,
			'story'
		].join('/');


		return uri;

	}
}


module.exports = api;

