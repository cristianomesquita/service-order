'use strict';

function Customer(customer, app) {
    this._customer = customer;
    this._app = app;
    this._connection = this._app.infra.connectionFactory();
    this._customerDAO = new this._app.infra.CustomerDAO(this._connection);
}

Customer.prototype.list = function (res) {
    this._customerDAO.listDAO(function (err, list) {
        res.send(`<h2>${list}</h2>`);
    });
}

Customer.prototype.addCustomer = function (req, res) {
    this._customerDAO.addCustomerDAO(req, function (err, customer) {
        if (err) {
            console.log('Erro ao tentar persistir no banco de dados -> ',err);
        } else {
            console.log('Cliente salvo com sucesso.', customer);
            res.end("Cliente salvo com sucesso.");
        }
    });
}

module.exports = function () {
    return Customer;
}


