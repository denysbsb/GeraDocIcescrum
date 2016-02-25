var request = require('request');
var config = require('./config/module.js')
var baseURI = config.URLBASEICESCRUM;
var api = {

	request:function(projectName,callback){

		var values = [];
		var actions = ['sprint/456','story/496'];

		for (var i = 0; i < 2; i++) {
			
			var self = this;
			var uri = self.makeURI(projectName,actions[i]);

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

			  	values.push(body);
			  	console.log(values);
			  	self.makeObject(values,callback);
			  	//self.makeObject(body,callback);
			  });

		} 

/*
		for (var i = 0; i < actions.length; i++){
			
			var uri = self.makeURI('TCUPUSH', actions[i]);
			
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

			  	
			  	//console.log(values);
			  	console.log(body);

			  	//self.makeObject(values,callback);
			  	//self.makeObject(body,callback);
			  });

		
		}
*/

		

		
		
		
		

	},
	/*
	requesty:function(uri){

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
			  }, return body );


	},
	*/

	makeObject:function(values, callback){

		values = JSON.parse(values[0]);
			
			//console.log(values);
		//var values = {"id":456,"activationDate":null,"capacity":0,"closeDate":null,"dailyWorkTime":8,"deliveredVersion":null,"doneDefinition":null,"endDate":"2016-02-28T00:00:00Z","goal":"Generated Sprint","initialRemainingTime":null,"lastUpdated":"2016-02-16T17:29:42Z","orderNumber":1,"parentRelease":{"id":455},"retrospective":null,"startDate":"2016-02-22T00:00:00Z","state":1,"stories":[],"tasks":[],"velocity":0,"expectedAvailability":0,"actualAvailability":0};

		//var el = JSON.decode(values);
		//console.log(typeof el);
		//console.log(values);
		//console.log(typeof values[0]);
		callback(values);
	
	},
	setAction:function(){
		var action = [
			'task',
			'sprint',
			'release',
			'feature',
			'actor',
			'release',
			'finder'
		];

		makeURI(action);
	},

	makeURI:function(projectName,actions){

		var uri = [
			baseURI,
			projectName,
			actions
		].join('/');


		return uri;

	}
}


module.exports = api;

