const chai = require('chai');
const nock = require('nock');

const Retail = require('../../lib/relianceHMO/Retail');
const RetailMock = require('../mock/relianceHMO/Retail');

const { expect } = chai;
const { data } = RetailMock;

const { sandbox_key, host } = data;

const scope = nock(host);

describe('Retail', () => {
    it('Should return Retail Signup data ', async() => {
        scope
            .post('/relianceHMO/retail/signup')
            .reply(200, RetailMock.Signup);

        const validate = await Retail.Signup({
            sandbox_key,
            payload: data.Signup,
            host,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('object');
    });

    it('Should return Retail Renew data ', async() => {
        scope
            .put('/relianceHMO/retail/renew')
            .reply(200, RetailMock.Renew);

        const validate = await Retail.Renew({
            sandbox_key,
            host,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('object');
    });
});
