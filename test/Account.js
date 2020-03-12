const chai = require('chai');
const nock = require('nock');
const faker = require('faker');

const Account = require('../lib/sterling/Account');

const scope = nock('https://sandboxapi.fsi.ng');
const { AccountMock }  = require('./fixtures');

const { expect } = chai;

describe('Transfer', () => {
    it('Should return user data ', async() => {
       scope.get('/sterling/TransferAPIs/api/Spay/InterbankNameEnquiry')
        .query({...AccountMock.data.params})
        .reply(200, AccountMock.InterbankNameEnquiry);
        const validate = await Account.InterbankNameEnquiry({...AccountMock.data});
        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.data).to.have.property('BVN');
    });

});
