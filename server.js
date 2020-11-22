// Este es el principal
// Para ejecutar: nodemon server -e js,hbs,html,css
// Con el -e js,hbs,html,css decimos a nodemon que esté pendiente de los cambios en
// archivos de esa extensión

const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

// -------------------------- HEROKU -------------------------------------------
// Obtener el puerto para usar en HEROKU
const port = process.env.PORT || 3000;

// Decirle a HEROKU que fuente tiene que ejecutar y con qué comandos.
// Para esto ir a package.json. Se crea el script start, se tiene que llamar así.
// Se puede probar ejecutando npm start
// También se crea otra entrada en scripts llamada nodemon que tenemos que ejecutar
// de la siguiente forma: npm run nodemon
// -------------------------- HEROKU -------------------------------------------

// -------------------------- MIDDLEWARE y CARPETA PUBLICA ---------------------
// middleware: instrucción o callback que se va a ejecutar siempre, independientemente
// de la url que pida el usuario. Es de dominio público. Cualquier persona puede verlo.
// NOTA: Para que funcione index.html simplemente acceder a: localhost:3000
//              (Primero, en public hay que renombar index-old.html y about-old.html como
//               index.html y about.html. También comentar la parte HANDLEBARS)
//       Para que funcione home-old.html acceder a: localhost:3000/home-old.html
//              Importante el .html porque si no, lo que hace es buscar un servicio /home-old,
//              también estaría buscando una carpeta home-old y dentro un index.html
app.use(express.static(__dirname + '/public'));
// -------------------------- MIDDLEWARE y CARPETA PUBLICA ---------------------

// -------------------------- HANDLEBARS, PARCIALES y HELPERS ------------------
// Express HBS engine (es como PUG por ejemplo)
// Parciales de HBS son un bloque de código HTML que se puede reutilizar.
// En una carpeta se almacenan todos los parciales.
// NOTA sobre Frameworks JS del lado del cliente
// En vez de usar hbs se puede usar React, VueJS y lo que hay que hacer es copiar el
// proyecto compilado en la carpeta public de Node
// Fichero de helpers importado arriba. Ver hbs/helpers.js
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'joSé mANuel',
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});
// -------------------------- HANDLEBARS, PARCIALES y HELPERS ------------------

// -------------------------- USO BASICO ---------------------------------------
// En el browser o en Postman: localhots/3000
// app.get('/', (req, res) => {
//   const salida = {
//     nombre: 'josé manuel',
//     edad: 42,
//     url: req.url,
//   };

//   res.send(salida);
// });

// En el browser o en Postman: localhots/3000/data
// app.get('/data', (req, res) => {
//   res.send('Hola Data');
// });
// -------------------------- USO BASICO ---------------------------------------

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});

// Conectar archivos a la aplicación.
// Ir a la carpeta public y generar otra carpeta assets. Copiar dentro los archivos que
// queremos conectar a nuestra aplicación de NodeJS
// Como indicamos, la carpeta public está disponible para cualquier persona, por tanto,
// el contenido de assets también está disponible.
// Ejemplo: en el browser escribir esta url: http://localhost:3000/assets/css/bootstrap.min.css
// Con eso ya podemos modificar index.html
