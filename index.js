const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { log } = require('console');

const port = 3030;


const arrayPerritos = [
  {
    raza: 'pitbull',
    color: 'gris',
    edad: 'cachorro',
    id: 0
  },
  {
    raza: 'chihuahua',
    color: 'miel',
    edad: 'adulto',
    id: 1
  },
  {
    raza: 'labrador',
    color: 'negro',
    edad: 'joven',
    id: 2
  },
  {
    raza: 'bulldog',
    color: 'blanco&cafe',
    edad: 'adulto',
    id: 3
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

app.post('/perritos', (req, res) => {
  const datos = req.body;
  arrayPerritos.push(datos);

  console.log(arrayPerritos);

  res.status(201)
  res.json(arrayPerritos)
});

app.put('/perritos/:id', (req, res) => {
  const id = req.params.id;
  const perritoIndicado = arrayPerritos[id];
  const edad = req.body.edad

  perritoIndicado.edad = edad;
  perritoIndicado.color = req.body.color;
 
  console.log(perritoIndicado);
  res.status(200).send(perritoIndicado);  
});

app.delete('/perritos/:id', (req, res) => {
  const id = req.params.id;

  for(let index = 0; index < arrayPerritos.length; index++) {
    if(arrayPerritos[index].id == id){
      arrayPerritos.splice(index, 1);
    }
  }

  console.log('Array original', arrayPerritos);

  res.status(200).send("Elemento eliminado");
});



// Función para mostrar error al ingresar cualquier otra ruta que no exista
app.use(function (req, res, next) {
  res.status(404).send("Oh oh, parece que ingresaste un ruta equivocada")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
