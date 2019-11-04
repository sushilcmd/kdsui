const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

const { makeConnection } = require('./app/dbConfig');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let port = 5034;

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});

const orderRoute = require('./app/order/order.route');


app.use('/order', orderRoute);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
    makeConnection();
});