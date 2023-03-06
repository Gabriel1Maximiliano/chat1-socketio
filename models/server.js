const express = require('express');
const path = require('path');
const http =  require('http');
const socketio = require('socket.io');
const  Sockets  = require('./sockets');


class Server {

    constructor() {
        this.app =  express();
        this.port = process.env.PORT || 8080;

        // Http server
        this.server= http.createServer( this.app );

        // configuracion de sockets
        this.server = http.createServer( this.app );  
        //configuración del  socket
        this.io = socketio( this.server ,{ /* configuraciones */ });

    }

middlewares() {
        
//desplegar directorio público

this.app.use( express.static( path.resolve( __dirname + '../../public') ));
    }
socketConfig() {
    new Sockets( this.io );
}

    execut() {
// inicializar middlewares
        this.middlewares();

// inicializar sockets 
this.socketConfig();        

// inicializar server
      this.server.listen(this.port, () => {
          console.log('Server corriendo en el puerto: '+this.port)
      });
    }
}

module.exports = Server;