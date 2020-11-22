const hbs = require('hbs');

// Helpers: son funciones que se disparan cuando el template lo requiere.
// En el render se buscan las variables que se usan en el template, pero si no está
//   se busca en un helper.
hbs.registerHelper('getAnio', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', texto => {
  const palabras = texto.split(' ');
  palabras.forEach((palabra, idx) => {
    palabras[idx] =
      palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });

  return palabras.join(' ');
});
