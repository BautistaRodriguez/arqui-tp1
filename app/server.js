const PORT = 3000;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
    console.log('request received');
});

app.get('/sleep', function (req, res) {
    setTimeout(() => {
        res.send('Ya me desperte')
    }, 3000);
});

app.get('/heavyLoad', function (req, res) {
    fibo(30);
    res.send('Fibonacci');
});

function fibo(n) { 
    if (n < 2)
        return 1;
    else   return fibo(n - 2) + fibo(n - 1);
}

app.use(function (req, res, next) {
    res.status(404).send("Lo siento, esa ruta no existe. Que tengas un buen dia :)");
});

app.listen(PORT, function () {
    console.log('Aplicacion de ejemplo escuchando en el puerto' + PORT);
});