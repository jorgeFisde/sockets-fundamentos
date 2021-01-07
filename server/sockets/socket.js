const {io} = require('../server');



io.on( 'connection', ( client ) => {

    console.log('Usuario conectado.');

    client.on( 'disconnect', () => {

        console.log('Cliente desconectado.');

    });

    client.on( 'Enviar:Mensaje', (data, callback) => {
        
        console.log( data );


        client.broadcast.emit( 'Enviar:Mensaje', data );
        // if ( message.nombre ) {
            
        //     callback({
        //         resp: 'Todo salio excelente.'
        //     });

        // }else{
            
        //     callback({
        //         resp: 'Hubio un error al cargar algo no she'
        //     });

        // }

    });


});