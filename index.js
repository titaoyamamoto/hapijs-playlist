const Hapi = require('hapi');

(async () => {
    
    const server = await new Hapi.server({
        host: 'localhost',
        port: 3000
    });

    // Add the route
    server.route({
        method: 'GET',
        path: '/hello',
        handler: function (request, h) {

            return h.response({
                message: "hello world"
            }).code(200);

        }
    });

    try {
        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    }
    catch (err) {
        console.log(err);
    }

})();
