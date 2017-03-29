'use strict';

const express = require('express');
const app = express();
const data = require('./data.json');

app.use('/', express.static("${__urlName}/public"));

app.get('/visits', function(req, res) {
    res.status(200).json(data);
});

app.use(function (req, res, next) {
    res.status(404).send('can not find any data!');
});

app.use(function (err, req, res, next){
    console.error(err.stack);
res.status(500).send();
});

module.exports = app;