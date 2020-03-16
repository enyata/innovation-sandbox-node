const chai = require('chai');
const nock = require('nock');

const Transfer = require('../../lib/sterling/Transfer');

const scope = nock('https://sandboxapi.fsi.ng');
<<<<<<< HEAD:test/Transfer.js
const { TransferMock } = require('./fixtures');
=======
const TransferMock   = require('../fixtures/sterling/Transfer');
const { params } = TransferMock.data
>>>>>>> Add test to atlabs module:test/sterling/Transfer.test.js

const { expect } = chai;

describe('Transfer', () => {
<<<<<<< HEAD:test/Transfer.js
    it('Should return successful transaction ', async() => {
        scope.post('/sterling/accountapi/api/Spay/InterbankTransferReq', {
            ...TransferMock.data.payload
        })
            .reply(200, TransferMock.InterbankTransferReq);
        const validate = await Transfer.InterbankTransferReq({...TransferMock.data});
=======
    it('Should return user data ', async() => {
       scope.get('/sterling/TransferAPIs/api/Spay/InterbankNameEnquiry')
        .query(params)
        .reply(200, TransferMock.InterbankNameEnquiry);
        const validate = await Transfer.InterbankNameEnquiry(TransferMock.data);
>>>>>>> Add test to atlabs module:test/sterling/Transfer.test.js
        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.data.ResponseText).to.equal('Your transaction has been submitted for processing.');
    });

});
