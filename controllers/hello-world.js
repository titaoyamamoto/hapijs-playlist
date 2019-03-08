

const hello = (request, h) => {

    return h.response({
        message: "hello world"
    }).code(200);

}

module.exports = {
    hello: hello,
}