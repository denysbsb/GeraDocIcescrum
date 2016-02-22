var request = require('request');

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
    console.log(body)
  });