const chai = require('chai');
const nock = require('nock');

const CustomerWallet = require('../../../lib/fcmb/wallets/CustomerWallet');
const CustomerWalletMock = require('../../mock/fcmb/wallets/CustomerWallet');

const { data } = CustomerWalletMock;
const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host, client_id } = data;

describe('Balance', () => {
    it('Should get balance', async() => {
        scope
            .get('/fcmb/wallet/Customerwallet/Balance')
            .query(data.retrieveWalletBalance.params)
            .reply(200, CustomerWalletMock.responseTwo);

        const validate = await CustomerWallet.retrieveWalletBalance({
            sandbox_key,
            params: data.retrieveWalletBalance.params,
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
            .put('/fcmb/wallet/Customerwallet/Balance', data.updateWalletBalance.payload)
            .reply(200, CustomerWalletMock.responseTwo);

        const validate = await CustomerWallet.updateWalletBalance({
            sandbox_key,
            payload: data.updateWalletBalance.payload,
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
            .post('/fcmb/wallet/Customerwallet/new', data.createWallet.payload)
            .reply(200, CustomerWalletMock.responseTwo);

        const validate = await CustomerWallet.createWallet({
            sandbox_key,
            payload: data.createWallet.payload,
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
            .put('/fcmb/wallet/Customerwallet/Status', data.updateWalletStatus.payload)
            .reply(200, CustomerWalletMock.responseTwo);

        const validate = await CustomerWallet.updateWalletStatus({
            sandbox_key,
            payload: data.updateWalletStatus.payload,
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
            .query(data.validateWalletCode.params)
            .reply(200, CustomerWalletMock.responseTwo);

        const validate = await CustomerWallet.validateWalletCode({
            sandbox_key,
            params: data.validateWalletCode.params,
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
