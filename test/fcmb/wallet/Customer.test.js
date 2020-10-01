const chai = require('chai');
const nock = require('nock');

const Customer = require('../../../lib/fcmb/wallet/Customer');
const CustomerMock = require('../../mock/fcmb/wallet/Customer');

const { data } = CustomerMock;
const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host, client_id } = data;

describe('Balance', () => {
    it('Should get balance', async() => {
        scope
            .get('/fcmb/wallet/Customerwallet/Balance')
            .query(data.GetBalance.params)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.GetBalance({
            sandbox_key,
            params: data.GetBalance.params,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should update balance', async() => {
        scope
            .put('/fcmb/wallet/Customerwallet/Balance', data.Balance.payload)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.Balance({
            sandbox_key,
            payload: data.Balance.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should create wallet', async() => {
        scope
            .post('/fcmb/wallet/Customerwallet/new', data.Create.payload)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.Create({
            sandbox_key,
            payload: data.Create.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should update wallet status', async() => {
        scope
            .put('/fcmb/wallet/Customerwallet/Status', data.Customerwallet.payload)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.Customerwallet({
            sandbox_key,
            payload: data.Customerwallet.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should validate wallet code', async() => {
        scope
            .get('/fcmb/wallet/validateCode')
            .query(data.ValidateCode.params)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.ValidateCode({
            sandbox_key,
            params: data.ValidateCode.params,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should create customer', async() => {
        scope
            .post('/fcmb/wallet/Customer', data.CreateCustomer.payload)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.CreateCustomer({
            sandbox_key,
            payload: data.CreateCustomer.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should Update customer details', async() => {
        scope
            .put('/fcmb/wallet/Customer', data.UpdateCustomer.payload)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.UpdateCustomer({
            sandbox_key,
            payload: data.UpdateCustomer.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should get customer mobileNo', async() => {
        scope
            .get('/fcmb/wallet/Customer/MobileNo')
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.MobileNo({
            sandbox_key,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should update customer mobileNo', async() => {
        scope
            .put('/fcmb/wallet/Customer/MobileNo', data.UpdateMobileNo.payload)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.UpdateMobileNo({
            sandbox_key,
            payload: data.UpdateMobileNo.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should update customer name', async() => {
        scope
            .get('/fcmb/wallet/Customer/name')
            .query(data.Name.params)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.Name({
            sandbox_key,
            params: data.Name.params,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should set customer pin', async() => {
        scope
            .post('/fcmb/wallet/Customer/Pin', data.Pin.payload)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.Pin({
            sandbox_key,
            payload: data.Pin.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should SetTransaction Password', async() => {
        scope
            .post('/fcmb/wallet/Customer/Password', data.Password.payload)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.Password({
            sandbox_key,
            payload: data.Password.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });
});
