var fs = require('fs');
var sp = require('../');

if (!process.env.SP_KEY) {
  throw new Error('Set your SP_KEY environment variable before running test.');
}

var client = sp.createClient(process.env.SP_KEY);

client('design', process.argv[2]).post({}, function (err, json) {
	console.log(err, json);
})
