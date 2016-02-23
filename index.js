var api = require('./icescrumapi.js'),
	bind = require('./binddocument.js'),
	projectName = process.argv[2];
/*
	process.argv[2] = projectName
*/

if(projectName === undefined){
	console.log('Nome do projeto é requerido');
	return;
}

api.request(projectName,bind.process);