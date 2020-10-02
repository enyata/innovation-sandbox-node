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
            .query(data.GetBalance.params)
            .reply(200, CustomerWalletMock.responseTwo);

        const validate = await CustomerWallet.GetBalance({
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
            .reply(200, CustomerWalletMock.responseTwo);

        const validate = await CustomerWallet.Balance({
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
            .reply(200, CustomerWalletMock.responseTwo);

        const validate = await CustomerWallet.Create({
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
            .reply(200, CustomerWalletMock.responseTwo);

        const validate = await CustomerWallet.Customerwallet({
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
            .reply(200, CustomerWalletMock.responseTwo);

        const validate = await CustomerWallet.ValidateCode({
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
});
