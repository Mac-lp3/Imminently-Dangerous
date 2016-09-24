'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
	host: 'localhost', 
    port: 8080 
});

server.register(require('inert'), (err) => {

	if (err) {
        throw err;
    }

    server.route({  
  		method: 'GET',
  		path: '/static/{file*2}',
  		handler: {
    		directory: { 
      			path: 'static/'
    		}
  		}
	})

	server.route({
	    method: 'GET',
	    path:'/', 
	    handler: require('./routes/index')
	});

	// Add the route
	server.route({
	    method: 'GET',
	    path:'/hello', 
	    handler: function (request, reply) {
	        return reply('hello world');
	    }
	});

	// Start the server
	server.start((err) => {

	    if (err) {
	        throw err;
	    }
	    console.log('Server running at:', server.info.uri);
	});

});