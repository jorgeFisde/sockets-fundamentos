// archivo de configuracion global 
require('./config/config');

const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const socketIO   = require('socket.io');
const http       = require('http');

const app     = express();
const server  = http.createServer( app );


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// archivos estaticos
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static( publicPath ));

// parse application/json
app.use(bodyParser.json())


// configuracion del socket: esta es la comunicacion del backend
module.exports.io = socketIO( server );
require('./sockets/socket');



server.listen(process.env.PORT, (err) => {

    if ( err ) throw new Error(err);

    console.log('Estoy en el puerto', process.env.PORT);
})

