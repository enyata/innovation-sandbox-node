const chai = require('chai');
const nock = require('nock');

const Customer = require('../../../lib/fcmb/wallets/Customer');
const CustomerMock = require('../../mock/fcmb/wallets/Customer');

const { data } = CustomerMock;
const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host, client_id } = data;

describe('Balance', () => {
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
