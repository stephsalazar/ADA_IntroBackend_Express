const prettyMilliseconds = require('pretty-ms');

const fechaActual = new Date();

const navidad = new Date(2021,11,25);

const cuantoFalta = prettyMilliseconds(navidad - fechaActual);

console.log(cuantoFalta)
