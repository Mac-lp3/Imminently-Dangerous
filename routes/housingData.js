'use strict';

const http = require('http');

let version = 'v0.7';
let url = 'http://services.phila.gov/PhillyApi/Data/' + version + '/Service.svc/locations';

module.exports = function (req, reply) {

	var request = http.get(url, function (response) {

	    // data is streamed in chunks    
	    let buffer = "", 
	        data;

	    response.on("data", function (chunk) {
	        buffer += chunk;
	    }); 

	    response.on("end", function (err) {

	        // finished transferring data
	        data = JSON.parse(buffer);
	        return reply(data);
	    });

	}); 

	const formData = req.payload;

	return reply({
		status: 'ok',
		things: [1, 2, 3]
	});

};