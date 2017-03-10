'use strict';

function CustomerDAO(connection) {
    this._connection = connection;
    this._Schema = this._connection.Schema;

    this._CustomerSchema = new this._Schema({

        name: { type: String, required: 'Nome do cliente é obrigatório.' },
        idCode: { type: String }, //cpf/cnpj
        address: { type: String },
        neighborhood: { type: String },
        houseNumber: { type: Number },
        city: { type: String },
        state: { type: String },
        zipCode: { type: String },
        phoneNumber: { type: String },
        email: { type: String }

    });

    this._CustomerModel = this._connection.model('customer', this._CustomerSchema);
}

CustomerDAO.prototype.listDAO = function (callback) {
    this._CustomerModel.find({}, callback);
    this.closeConnection();
}

CustomerDAO.prototype.addCustomerDAO = function (req, callback) {
    let customerData = req.body;
    let customer = new this._CustomerModel(customerData);
    customer.save(callback);
    this.closeConnection();
}

CustomerDAO.prototype.closeConnection = function () {
    //close mongodb connection
    this._connection.disconnect(() => {
        this._connection.models = {};
    });
}

module.exports = function (app) {
    return CustomerDAO;
}


