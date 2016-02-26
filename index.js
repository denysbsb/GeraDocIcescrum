var api = require('./icescrumapi.js'),
bind = require('./binddocument.js'),
projectName = process.argv[2];

var actions = ['story/496','sprint/456'];

api.request(projectName,bind.process,actions);