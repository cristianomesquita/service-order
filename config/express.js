'use strict';

const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');

function expressConfig() {
    const app = express();
    app.use(bodyParser.json());

    load('routes', { cwd: 'app' })
        .then('api')
        .then('infra')
        .into(app);

    return app;
}

module.exports = expressConfig;