'use strict';

const app = require('./app');

const port = process.env.PORT || 1337;

app.listen(port, function () {
    console.log('app is listening on '+port);
});