'use strict';

module.exports = function (app) {

    app.get('/customer', (req, res) => {
        let objCustomer = new app.api.Customer({}, app);
        objCustomer.list(res);
    });

    app.post('/customer', (req, res) => {
        let objCustomer = new app.api.Customer(req.body, app);
        objCustomer.addCustomer(req, res);
    });
}

