const PORT = 3000;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

app.route('/article')
.get(function (req, res) {
    res.send('Get the article');
})
.post(function (req, res) {
    res.send('Add an article');
})
.put(function (req, res) {
    res.send('Update the article');
});

app.get('/the*man', function (req, res) {
    res.send('the*man');
});

app.get(/bat/, function (req, res) {
    res.send('/bat/');
});

app.use(function (req, res, next) {
    res.status(404).send("Lo siento, esa ruta no existe. Que tengas un buen dia :)");
});

app.listen(PORT, function () {
    console.log('Aplicacion de ejemplo escuchando en el puerto' + PORT);
});