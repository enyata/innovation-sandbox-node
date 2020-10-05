const chai = require('chai');
const nock = require('nock');

const Kyc = require('../../../lib/fcmb/wallets/Kyc');
const KycMock = require('../../mock/fcmb/wallets/Kyc');

const { data } = KycMock;
const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host, client_id } = data;

describe('KYC', () => {
    it('Get Customer KYC', async() => {
        scope
            .get('/fcmb/wallet/KYC')
            .reply(200, KycMock.responseTwo);

        const validate = await Kyc.getCustomerKYC({
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

    it('Get Customer KYC', async() => {
        scope
            .get('/fcmb/wallet/KYC')
            .reply(200, KycMock.responseTwo);

        const validate = await Kyc.getCustomerKYC({
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

    it('should create Customer KYC', async() => {
        scope
            .post('/fcmb/wallet/KYC', data.createCustomerKYC.payload)
            .reply(200, KycMock.responseTwo);

        const validate = await Kyc.createCustomerKYC({
            sandbox_key,
            payload: data.createCustomerKYC.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should update Customer KYC', async() => {
        scope
            .put('/fcmb/wallet/KYC', data.updateCustomerKYC.payload)
            .reply(200, KycMock.responseTwo);

        const validate = await Kyc.updateCustomerKYC({
            sandbox_key,
            payload: data.updateCustomerKYC.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should update customer kyc status', async() => {
        scope
            .put('/fcmb/wallet/KYC/Status', data.updateKYCStatus.payload)
            .reply(200, KycMock.responseTwo);

        const validate = await Kyc.updateKYCStatus({
            sandbox_key,
            payload: data.updateKYCStatus.payload,
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
