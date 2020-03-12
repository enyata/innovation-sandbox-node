const chai = require('chai');
const nock = require('nock');

const Transfer = require('../lib/sterling/Transfer');

const scope = nock('https://sandboxapi.fsi.ng');
const { TransferMock } = require('./fixtures');

const { expect } = chai;

describe('Transfer', () => {
    it('Should return successful transaction ', async() => {
        scope.post('/sterling/accountapi/api/Spay/InterbankTransferReq', {
            ...TransferMock.data.payload
        })
            .reply(200, TransferMock.InterbankTransferReq);
        const validate = await Transfer.InterbankTransferReq({...TransferMock.data});
        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.data.ResponseText).to.equal('Your transaction has been submitted for processing.');
    });

});
