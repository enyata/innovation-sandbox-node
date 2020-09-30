const chai = require('chai');
const nock = require('nock');

const Payments = require('../../lib/fcmb/Payments');
const PaymentMock = require('../mock/fcmb/payments');

const { data } = PaymentMock;
const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host, client_id } = data;

describe('Payment', () => {
    it('should make payment via bank to bank transfer', async() => {
        scope
            .post('/fcmb/payments/b2b/transfers', data.B2btransfers.payload)
            .reply(200, PaymentMock.B2btransfers);

        const validate = await Payments.B2btransfers({
            sandbox_key,
            payload: data.B2btransfers.payload,
            host,
            client_id,
        });


        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('The operation was successful.');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should make payment via bank to bank internal transfer', async() => {
        scope
            .post('/fcmb/payments/b2b/internal/transfers', data.B2binternaltransfers.payload)
            .reply(200, PaymentMock.B2binternaltransfers);

        const validate = await Payments.B2binternaltransfers({
            sandbox_key,
            payload: data.B2binternaltransfers.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should make internal transfer', async() => {
        scope
            .post('/fcmb/payments/internal/transfers', data.Internaltransfers.payload)
            .reply(200, PaymentMock.Internaltransfers);


        const validate = await Payments.Internaltransfers({
            sandbox_key,
            payload: data.Internaltransfers.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should retrieve internal transfers', async() => {
        scope
            .get('/fcmb/payments/internal/transfers')
            .query(data.RetrieveInternaltransfers.params)
            .reply(200, PaymentMock.Internaltransfers);

        const validate = await Payments.RetrieveInternaltransfers({
            sandbox_key,
            params: data.RetrieveInternaltransfers.params,
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
