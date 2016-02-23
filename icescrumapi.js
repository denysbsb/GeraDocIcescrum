var request = require('request');
var config = require('./config/module.js')
var baseURI = config.URLBASEICESCRUM;
var api = {
	request:function(projectName,callback){
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
		  	self.makeObject(body,callback);
		  });
	},

	makeObject:function(body,callback){

		var documento = [
		{"NomeProjeto":"TCUPUSH","Historia":"Listagem"}, //SprintBacklog
		{"NomeProjeto":"TCUPUSH","Autor":"Mayla","Equipe":"Comma"} //ProductBacklog	
		];

		callback(documento);
	},
	setAction:function(){
		
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

