var fs = require('fs');
var Docxtemplater = require('docxtemplater');
var ImageModule = require('docxtemplater-image-module');
var EasyZip = require('easy-zip').EasyZip;
var config = require('./config/module.js')
//Metedo para exibixao de imagens
var opts = {}
opts.centered = false;
opts.getImage = function(tagValue, tagName) {
    return fs.readFileSync(tagValue,'binary');
}

opts.getSize = function(img,tagValue, tagName) {
    return [150,150];
}

var imageModule = new ImageModule(opts);
//Carrega o Template utilizado


var bind ={
	process:function(documento){

		//console.log(documento[0]);
		//documento = JSON.parse(documento[0]);
		//

		for (var i = 0; i < config.FILES.length ; i++) {
			bind.bind(config.FILES[i], documento);
		}

		//bind.zip();
		
	},

	bind:function(template, documento){

		var content = fs.readFileSync(__dirname + "/templates/" + template, "binary");
		var doc = new Docxtemplater(content);
	    doc.load(content)
	 	doc.setData(documento);
		doc.render();
		var buf = doc.getZip().generate({type:"nodebuffer"});
		fs.writeFile(__dirname + config.OUTPUTPATH + template ,buf);
	
	},

	zip:function(){
		var zip = new EasyZip();
		zip.zipFolder('./saida',function(){
		    zip.writeToFile('DocumentosGerados.zip');
		});
	}	
}


module.exports = bind;

 	