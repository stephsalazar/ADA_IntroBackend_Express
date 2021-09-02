const express = require('express');
const app = express();
const path = require('path')

const port = 3030;

app.get('/', (req, res) => {
  res.send('Gatitos');
});

app.get('/mostrarGatito', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/fotosGatitos', function(req, res) {
  res.json({
    "big" : ["http://i.imgur.com/CRSzQ4r.png", "http://i.imgur.com/l94Rfsj.png", "http://i.imgur.com/304PJ9p.png"],
    "evil" : ["http://i.imgur.com/4s6OJQj.png", "http://i.imgur.com/su9edl7.png", "http://i.imgur.com/bCgGgBM.png"],
    "grumpy" : ["http://i.imgur.com/EPGllv4.png", "http://i.imgur.com/DKFbRQ0.png", "http://i.imgur.com/bIqsqSK.png"],
    "inHats" : ["http://i.imgur.com/6XcjacS.png", "http://i.imgur.com/GC3lgzg.png", "http://i.imgur.com/q7MZgiG.png"],
  });
});

app.use(function (req, res, next) {
  res.status(404).send("Oh oh, parece que ingresaste un ruta equivocada")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})