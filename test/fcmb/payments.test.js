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
            .post('/fcmb/payments/b2b/transfers', data.b2bSingleTransfer.payload)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.b2bSingleTransfer({
            sandbox_key,
            payload: data.b2bSingleTransfer.payload,
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
            .post('/fcmb/payments/b2b/internal/transfers', data.internalB2BSingleTransfer.payload)
            .reply(200, PaymentMock.responseTwo);

        const validate = await Payments.internalB2BSingleTransfer({
            sandbox_key,
            payload: data.internalB2BSingleTransfer.payload,
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
            .post('/fcmb/payments/internal/transfers', data.createInternalTransfer.payload)
            .reply(200, PaymentMock.responseTwo);


        const validate = await Payments.createInternalTransfer({
            sandbox_key,
            payload: data.createInternalTransfer.payload,
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
            .query(data.getInternalTransfer.params)
            .reply(200, PaymentMock.responseTwo);

        const validate = await Payments.getInternalTransfer({
            sandbox_key,
            params: data.getInternalTransfer.params,
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
            .query(data.internalTransferDateRange.params)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.internalTransferDateRange({
            sandbox_key,
            params: data.internalTransferDateRange.params,
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
            .query(data.internalTransferStatus.params)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.internalTransferStatus({
            sandbox_key,
            params: data.internalTransferStatus.params,
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
            .post('/fcmb/payments/nip/transfers', data.nipSingleFundsTransfer.payload)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.nipSingleFundsTransfer({
            sandbox_key,
            payload: data.nipSingleFundsTransfer.payload,
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
            .query(data.nipTransferDateRange.params)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.nipTransferDateRange({
            sandbox_key,
            params: data.nipTransferDateRange.params,
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
            .post('/fcmb/payments/nip/charge', data.insertNIPCharge.payload)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.insertNIPCharge({
            sandbox_key,
            payload: data.insertNIPCharge.payload,
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

        const validate = await Payments.getNIPBanks({
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
            .post('/fcmb/payments/nip/name', data.nipNameEnquiry.payload)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.nipNameEnquiry({
            sandbox_key,
            payload: data.nipNameEnquiry.payload,
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
            .query(data.nipTransferStatus.params)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.nipTransferStatus({
            sandbox_key,
            params: data.nipTransferStatus.params,
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
            .post('/fcmb/payments/nibss/status', data.nibssPaymentStatus.payload)
            .reply(200, PaymentMock.responseOne);

        const validate = await Payments.nibssPaymentStatus({
            sandbox_key,
            payload: data.nibssPaymentStatus.payload,
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
