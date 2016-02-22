var fs = require('fs');
var Docxtemplater = require('docxtemplater');
var ImageModule = require('docxtemplater-image-module');
var EasyZip = require('easy-zip').EasyZip;
var request = require('request');

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
var content = fs
    .readFileSync(__dirname + "/templates/input.docx", "binary");

var doc = new Docxtemplater(content);

 	doc.attachModule(imageModule)
    doc.load(content)

    request({
    headers: {
      'Content-Type': 'application/json'
    },
     'auth': {
    'user': 'denys.araujo',
    'pass': 'a1920212223',
    'sendImmediately': false
  	},
    uri: 'http://177.69.58.70:8888/icescrum/ws/p/TCUPUSH/story',
    method: 'GET'
  }, function (err, res, body) {
		console.log(body); 
  });

  
    //console.log(this.req._callback);


 	var dados = {
	    "first_name":"Denys",
	    "last_name":"Edgar",
	    "phone":"0613399-2325",
	    "description":"Nova servico",
	    image:"images/image.png"
	};
//set Variaveis no Template
	 doc.setData(dados);

//aplica os valores no Template
	doc.render();

var buf = doc.getZip().generate({type:"nodebuffer"});

fs.writeFile(__dirname+"/documentos/output.docx",buf);

//Zipa a pasta 
var zip = new EasyZip();
zip.zipFolder('./documentos',function(){
    zip.writeToFile('DocumentosGerados.zip');
});

