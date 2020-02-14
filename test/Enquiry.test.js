const chai = require('chai');
const nock = require('nock');
const faker = require('faker');

const Enquiry = require('../lib/sterling/Enquiry');

const scope = nock('https://sandboxapi.fsi.ng');
const { EnquiryMock }  = require('./fixtures');

const { expect } = chai;

describe('Enquiry', () => {
    it('Should return user data ', async() => {
       scope.get('/sterling/TransferAPIs/api/Spay/InterbankNameEnquiry')
        .query({...EnquiryMock.data.params})
        .reply(200, EnquiryMock.Name);
        const validate = await Enquiry.Name({...EnquiryMock.data});
        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.data).to.have.property('BVN');
    });

});
