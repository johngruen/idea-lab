var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({ port: 3000 });

// Views
server.views({
    engines: {
        html: require('handlebars')
    },
    context: require('./app/data/default_context'),
    layout: 'layout',
    layoutPath: './app/views',
    path: './public/templates'
  });

// Routes 
server.route(require('./app/routes'));

server.start(function () {
    console.log('Server running at:', server.info.uri);
});

