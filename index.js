const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3030;


const arrayPerritos = [
  {
    raza: 'pitbull',
    color: 'gris',
    edad: 'cachorro',
  },
  {
    raza: 'chihuahua',
    color: 'miel',
    edad: 'adulto',
  },
  {
    raza: 'labrador',
    color: 'negro',
    edad: 'joven',
  },
  {
    raza: 'bulldog',
    color: 'blanco&cafe',
    edad: 'adulto',
  },
]

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());


// Ruta raíz (Aqui inicia nuestro servidor)
app.get('/', (req, res) => {
  res.send('Gatitos y perros');
});

// Ruta básica & retorna archivo estático 
app.get('/mostrarGatito', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta con parámetros & retorna texto simple
app.get('/mostrarGatito/:raza', (req, res) => {
  const raza = req.params.raza;
  
  console.log(raza);
  res.send(`Foto de gatito tipo: ${raza}`);
});

// Ruta básica & retorna un JSON
app.get('/fotosGatitos', function(req, res) {
  res.json({
    "big" : ["http://i.imgur.com/CRSzQ4r.png", "http://i.imgur.com/l94Rfsj.png", "http://i.imgur.com/304PJ9p.png"],
    "evil" : ["http://i.imgur.com/4s6OJQj.png", "http://i.imgur.com/su9edl7.png", "http://i.imgur.com/bCgGgBM.png"],
    "grumpy" : ["http://i.imgur.com/EPGllv4.png", "http://i.imgur.com/DKFbRQ0.png", "http://i.imgur.com/bIqsqSK.png"],
    "inHats" : ["http://i.imgur.com/6XcjacS.png", "http://i.imgur.com/GC3lgzg.png", "http://i.imgur.com/q7MZgiG.png"],
  });
});

app.get('/perritos', (req, res) => {
  res.json(arrayPerritos);
});



// Función para mostrar error al ingresar cualquier otra ruta que no exista
app.use(function (req, res, next) {
  res.status(404).send("Oh oh, parece que ingresaste un ruta equivocada")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
