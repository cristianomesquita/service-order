'use strict';

const mongoose = require('mongoose');

const mongoDBConnection = function(){
    mongoose.connect('mongodb://localhost/service_order');
    return mongoose;
}

module.exports = function(){
    return mongoDBConnection;
}

