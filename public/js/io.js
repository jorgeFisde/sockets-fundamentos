
var socket = io();



socket.on('connect', function () {

    console.log('Nueva conexión.');

});

socket.on('disconnect', function () {

    console.log('Se perdió la conexión con el servidor.');

});


socket.emit('Enviar:Mensaje', {

    nombre: 'jorge',
    message: 'Hola soy goku',

});

socket.on('Enviar:Mensaje', ( data ) => {

    console.log(`Servdor:`, data);
    
})



