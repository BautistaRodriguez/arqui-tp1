const PORT = 3000;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
    console.log('request received');
});

app.get('/sleep', function (req, res) {
    console.log("sleep");
    setTimeout(() => {
        console.log("wake up!");
        res.send('Ya me desperte')
    }, 3000);
    console.log("zzzzzzz");
});

app.get('/async', async function(req, res) {
    console.log("async");
    let result = await smallWait();
    console.log("async result: " + result);
    res.send(result);
});

app.get('/heavyLoad', function (req, res) {
    fibo(30);
    res.send('Fibonacci');
});


let smallWait = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 3000);
    });
} 

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