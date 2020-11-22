// Primer fuente realizado para ver como generar un webserver "a las bravas"
const http = require('http');

// Para poder escuchar peticiones HTTP primero tenemos que crear el servidor (webserver)
// y ponerlo a escuchar por un puerto
// Ejecutar con: node app-old.js
// Ir al browser o a Postman y poner la ruta: localhost:8080
// También sirve cualquier ruta: localhost:8080/data/1
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const salida = {
      nombre: 'josé manuel',
      edad: 42,
      url: req.url,
    };

    res.write(JSON.stringify(salida));

    //res.write('Hola Mundo');
    res.end();
  })
  .listen(8080);

console.log('Escuchando el puerto 8080');
