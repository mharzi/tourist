'use strict';

const app = require('express')();

const data = require('./data.json');

app.get("/visits", function (req, res){
    res.status(200).json(data);
});

app.use(function (req, res, next){
    res.status(404).send('Dont find data!');
});

module.exports = app;