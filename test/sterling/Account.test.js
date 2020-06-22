const chai = require('chai');
const nock = require('nock');

const Account = require('../../lib/sterling/Account');
const AccountMock = require('../mock/sterling/Account');

const { data } = AccountMock;
const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host } = data;

describe('Account', () => {
    it('Should return successful transaction ', async() => {
        scope
            .post('/sterling/accountapi/api/Spay/InterbankTransferReq', data.InterbankTransferReq.payload)
            .reply(200, AccountMock.InterbankTransferReq);

        const validate = await Account.InterbankTransferReq({
            sandbox_key,
            payload: data.InterbankTransferReq.payload,
            host,
        });

        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.data.ResponseText).to.equal(
            'Your transaction has been submitted for processing.',
        );
    });

    it('Should return mobile wallet request successful transaction ', async() => {
        scope
            .post('/sterling/accountapi/api/Spay/SBPMWalletRequest', data.MobileWalletRequest.payload)
            .reply(200, AccountMock.MobileWalletRequest);

        const validate = await Account.MobileWalletRequest({
            sandbox_key,
            payload: data.MobileWalletRequest.payload,
            host,
        });

        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.data.ResponseText).to.equal(
            'Your mobile wallet transaction has been submitted for processing.',
        );
    });
});
