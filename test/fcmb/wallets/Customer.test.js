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
            .post('/fcmb/wallet/Customer', data.createCustomer.payload)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.createCustomer({
            sandbox_key,
            payload: data.createCustomer.payload,
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
            .put('/fcmb/wallet/Customer', data.updateCustomer.payload)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.updateCustomer({
            sandbox_key,
            payload: data.updateCustomer.payload,
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

        const validate = await Customer.getCustomerByMobileNo({
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
            .put('/fcmb/wallet/Customer/MobileNo', data.updateCustomerMobileNo.payload)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.updateCustomerMobileNo({
            sandbox_key,
            payload: data.updateCustomerMobileNo.payload,
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
            .query(data.nameEnquiry.params)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.nameEnquiry({
            sandbox_key,
            params: data.nameEnquiry.params,
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
            .post('/fcmb/wallet/Customer/Pin', data.setPin.payload)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.setPin({
            sandbox_key,
            payload: data.setPin.payload,
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
            .post('/fcmb/wallet/Customer/Password', data.setTransactionPassword.payload)
            .reply(200, CustomerMock.responseTwo);

        const validate = await Customer.setTransactionPassword({
            sandbox_key,
            payload: data.setTransactionPassword.payload,
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
