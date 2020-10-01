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

        const validate = await Kyc.GetKyc({
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

        const validate = await Kyc.GetKyc({
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
            .post('/fcmb/wallet/KYC', data.CreateKyc.payload)
            .reply(200, KycMock.responseTwo);

        const validate = await Kyc.CreateKyc({
            sandbox_key,
            payload: data.CreateKyc.payload,
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
            .put('/fcmb/wallet/KYC', data.UpdateKyc.payload)
            .reply(200, KycMock.responseTwo);

        const validate = await Kyc.UpdateKyc({
            sandbox_key,
            payload: data.UpdateKyc.payload,
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
            .put('/fcmb/wallet/KYC/Status', data.KycStatus.payload)
            .reply(200, KycMock.responseTwo);

        const validate = await Kyc.KycStatus({
            sandbox_key,
            payload: data.KycStatus.payload,
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
