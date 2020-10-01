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
            .reply(200, PaymentMock.responseOne);

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
            .reply(200, PaymentMock.responseTwo);

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
            .reply(200, PaymentMock.responseTwo);


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
            .reply(200, PaymentMock.responseTwo);

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

    it('should retrieve intrenal transfer between date range', async() => {
        scope
            .get('/fcmb/payments/internal/transfers/DateRange')
            .query(data.InternaltransfersDateRange.params)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.InternaltransfersDateRange({
            sandbox_key,
            params: data.InternaltransfersDateRange.params,
            host,
            client_id,
        });
        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('The operation was successful.');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should return internal transfer status', async() => {
        scope
            .get('/fcmb/payments/internal/transfers/Status')
            .query(data.InternaltransfersStatus.params)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.InternaltransfersStatus({
            sandbox_key,
            params: data.InternaltransfersStatus.params,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('The operation was successful.');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('sholud Insert a nipSingleFundsTransfer', async() => {
        scope
            .post('/fcmb/payments/nip/transfers', data.Niptransfers.payload)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.Niptransfers({
            sandbox_key,
            payload: data.Niptransfers.payload,
            host,
            client_id,
        });
        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('The operation was successful.');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should return internal transfer within date range', async() => {
        scope
            .get('/fcmb/payments/nip/transfers/DateRange')
            .query(data.NiptransfersDateRange.params)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.NiptransfersDateRange({
            sandbox_key,
            params: data.NiptransfersDateRange.params,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('The operation was successful.');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should insert nip charge', async() => {
        scope
            .post('/fcmb/payments/nip/charge', data.Nipcharge.payload)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.Nipcharge({
            sandbox_key,
            payload: data.Nipcharge.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('The operation was successful.');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should ', async() => {
        scope
            .get('/fcmb/payments/nip/banks')
            .reply(200, PaymentMock.responseTwo);

        const validate = await Payments.Nipbanks({
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

    it('should Insert a nipNameEnquiry', async() => {
        scope
            .post('/fcmb/payments/nip/name', data.Nipname.payload)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.Nipname({
            sandbox_key,
            payload: data.Nipname.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('The operation was successful.');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should Get details of a specific transfer', async() => {
        scope
            .get('/fcmb/payments/nip/Status')
            .query(data.NipStatus.params)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.NipStatus({
            sandbox_key,
            params: data.NipStatus.params,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('The operation was successful.');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should Check status of current payment being processed', async() => {
        scope
            .post('/fcmb/payments/nibss/status', data.Nibssstatus.payload)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.Nibssstatus({
            sandbox_key,
            payload: data.Nibssstatus.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('The operation was successful.');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });
});
