

require('dotenv').config()
const express = require('express')
const hbs = require('hbs');
const app = express()
const puerto = process.env.PORT


//aplicacion web server que utiliza handlebars para renderizado de aplicaciones, y express para montaje del servidor
//tambien haciendo uso de los eleentos parciales de handlebars


//esto va a renderizar las vistas .hbs cuando res.render sea llamado
app.set('view engine', 'hbs');

// para servir contenido esatico en express se hace un midellware :D (una funcion que se ejecuta antes que todo)
app.use(express.static('public'))

hbs.registerPartials(__dirname + '/views/parciales');



//respuestas utilizaando HBS
const parametros= {
  'titulo' : 'pagina hbs',
  'autor' : 'KRDNA'
}

app.get('/', function (req, res) {
  res.render('home', parametros );
})

app.get('/index', function (req, res) {
  res.render('home', parametros );
})

app.get('/elements', (req, res)=>{
  res.render('elements', parametros)
});

app.get('/generic', function (req, res) {
  res.render('generic', parametros );
})


//respuestas a peticiones utilizando Express
/* app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/generic', function (req, res) {
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', function (req, res) {
  res.sendFile(__dirname + '/public/elements.html')
}) */

// app.get('*', function (req, res) {
//     res.send('nel perris 404')
//   })
app.listen(puerto, ()=>{
  console.log('servidor corriendo por el puerto', puerto)
});