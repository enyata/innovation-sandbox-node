const chai = require('chai');
const nock = require('nock');

const Account = require('../../lib/sterling/Account');
const AccountMock = require('../mock/sterling/Account');

const { data } = AccountMock;
const scope = nock(data.host);
const { expect } = chai;

describe('Account', () => {
    it('Should return successful transaction ', async() => {
        scope
            .post('/sterling/accountapi/api/Spay/InterbankTransferReq', data.payload)
            .reply(200, AccountMock.InterbankTransferReq);

        const validate = await Account.InterbankTransferReq(data);

        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.data.ResponseText).to.equal(
            'Your transaction has been submitted for processing.',
        );
    });
});
