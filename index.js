var fs = require('fs');
var Docxtemplater = require('docxtemplater');
var ImageModule = require('docxtemplater-image-module');
var EasyZip = require('easy-zip').EasyZip;

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

//set Variaveis no Template
	doc.setData({
	    "first_name":"Denys",
	    "last_name":"Edgar",
	    "phone":"0613399-2325",
	    "description":"Nova servico",
	    image:"images/image.png"
	});

//aplica os valores no Template
	doc.render();

var buf = doc.getZip().generate({type:"nodebuffer"});

fs.writeFile(__dirname+"/documentos/output.docx",buf);

//Zipa a pasta 
var zip = new EasyZip();
zip.zipFolder('./documentos',function(){
    zip.writeToFile('DocumentosGerados.zip');
});

