const helloController = require('./../controllers/hello-world');

module.exports = [
    {
        method: 'GET',
        path: '/hello',
        handler: helloController.hello
    }
];