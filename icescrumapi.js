var request = require('request');
var config = require('./config/module.js')
var baseURI = config.URLBASEICESCRUM;

var api = {
	request:function(projectName, callback, actions){

		var urls = [ 
		'http://177.69.58.70:8888/icescrum/ws/p/TCUPUSH/story',
		'http://177.69.58.70:8888/icescrum/ws/p/TCUPUSH/sprint'
		//'http://177.69.58.70:8888/icescrum/ws/p/TCUPUSH/story/496',
		//'http://177.69.58.70:8888/icescrum/ws/p/TCUPUSH/sprint/456'
		];

		var dados = [];
		var requisicao = 0;

		for (var i = 0; i < urls.length; i++){

		 	var uri = urls[i];
		 	var self = this;

			request({
			    headers: {
			      'Content-Type': 'application/json'
			    },
			    uri: uri,
			     'auth': {
			    'user': 'denys.araujo',
			    'pass': 'a1920212223',
			    'sendImmediately': false
			  	}, 
			    method: 'GET'
			  	}, function (err, res, body) {
					
					dados.push(body);
					requisicao++;

					if(requisicao == urls.length){
						self.makeObject(dados, callback);
					}
				});
		}
	},

	makeObject:function(dados, callback){
		
		callback(dados);
	},

}

module.exports = api;