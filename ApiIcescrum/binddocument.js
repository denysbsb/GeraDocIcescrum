var api = require('./icescrumapi.js');

if(process.argv[2] === undefined){
	console.log('Nome do projeto é requerido');
	return;
}

api.request(process.argv[2]);
console.log(api.request(process.argv[2]));