var fs = require('fs');
var Docxtemplater = require('docxtemplater');
var ImageModule = require('docxtemplater-image-module');
var EasyZip = require('easy-zip').EasyZip;
var config = require('./config/module.js')

var bind = {
	process:function(dados){
				var dados1 = JSON.parse(dados[0]); //story
				var dados2 = JSON.parse(dados[1]); //sprint
				var pacotes = [];

				for (var i = dados1.length - 1; i >= 0; i--) {
					pacotes.push({
						"id": dados1[i].id,
						"startDate": dados1[i].startDate,
					});
					
				};

				console.log(pacotes);
				//console.log(dados1[0].id);
				//console.log(dados2);

				

		for(var i = 0; i < config.FILES.length; i++){
			bind.bind(config.FILES[i],pacotes[i]);
		}
		
	},
	bind:function(template, dados){

		var content = fs.readFileSync(__dirname + "/templates/" + template, "binary");
		var doc = new Docxtemplater(content);
	    doc.load(content)
	 	doc.setData(dados);
		doc.render();
		var buf = doc.getZip().generate({type:"nodebuffer"});
		fs.writeFile(__dirname + config.OUTPUTPATH + template ,buf);

		
	}
};

module.exports = bind;

 	