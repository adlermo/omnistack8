const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes')

const server = express()

mongoose.connect('mongodb+srv://adler:adler@omnistack-ouzvl.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// informa ao express o uso de json files
server.use(cors())
server.use(express.json())

server.use(routes)

// GET, POST, PUT, DELETE

// req = requisição enviada (por url ou formulário)
// res = resposta
/* server.get('/', (req, res) => {
    // é preferível retornar respostas sempre como um objeto (json)
    return res.json({
        message:
            `Hallo Welt! Du bist ${req.query.name}?`
    })
    // query é recebido na url ('/?name=') e enviado novamente
}) */

server.listen(3333);

// M - Model, V - View, C - Controller (MVC)