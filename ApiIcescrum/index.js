var api = require('./icescrumapi.js');

/*
	process.argv[2] = projectName
*/

if(process.argv[2] === undefined){
	console.log('Nome do projeto é requerido');
	return;
}


api.request(process.argv[2]);

