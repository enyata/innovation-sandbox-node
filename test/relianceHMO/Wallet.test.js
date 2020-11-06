const chai = require('chai');
const nock = require('nock');

const Wallet = require('../../lib/relianceHMO/Wallet');
const WalletMock = require('../mock/relianceHMO/Wallet');

const { expect } = chai;
const { data } = WalletMock;

const { sandbox_key, host } = data;

const scope = nock(host);

describe('Wallet', () => {
    it('Should return Wallet Fund data ', async() => {
        scope
            .post('/relianceHMO/wallet/fund')
            .reply(200, WalletMock.Fund);

        const validate = await Wallet.Fund({
            sandbox_key,
            payload: data.fund,
            host,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('object');
    });

    it('Should return Wallet Transactions data ', async() => {
        scope
            .get('/relianceHMO/wallet/transactions')
            .reply(200, WalletMock.Transactions);

        const validate = await Wallet.Transactions({
            sandbox_key,
            host,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('array');
    });
});
