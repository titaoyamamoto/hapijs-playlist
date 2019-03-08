const Hapi = require('hapi');
const routes = require('./routes');

(async () => {
    
    const server = await new Hapi.server({
        host: 'localhost',
        port: 3000
    });

    // Add the route
    server.route(routes);

    try {
        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    }
    catch (err) {
        console.log(err);
    }

})();
