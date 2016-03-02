var config = require('./config.js');
var rp = require('request-promise');

var api = {
	genericAPIService:function(path, callback) {
		
		var options = {
		    uri: config.baseUrl + '/' + path,
		      
		    headers: {
			      'Content-Type': 'application/json'
			},
			'auth': {
			    'user': 'denys.araujo',
			    'pass': 'a1920212223',
			    'sendImmediately': false
			  	}, 
		    json: true
		};

		 rp(options)
		    .then(function (ret) {
		      callback(ret);
		    })
		    .catch(function (err) {
		       console.log(err);
		    });


	},

	getDados:function(){
		var dados = [];
		getSprint(dados);

		function getSprint(dados){
		
			api.genericAPIService('sprint', function (ret) {

	    	for(var i = 0; i < ret.length; i++){
						dados.push( {
						id: ret[i].id,
						 "tasks": [
				            {"id": 1370},
				            {"id": 1360},
				            {"id": 1378},
				            {"id": 1376},
				            {"id": 1354},
				            {"id": 1364}
				        ]
					});
	    	}
	    	getTaskSprint(dados);
	     		
	        })
        }

        function getTaskSprint(dados){
        	for(var i = 0; i < dados[0].tasks.length; i++){
       
        		api.genericAPIService('task/'+JSON.stringify(dados[0].tasks[i].id), function (ret) {
        			//console.log(ret);
        		})
        	}
       

        }

       //console.log(usuarioLogado);
	},

	process:function(){

	}


};
 

		api.getDados();
		//console.log(x);


  

    