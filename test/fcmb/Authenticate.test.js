const chai = require('chai');
const nock = require('nock');

const Authenticate = require('../../lib/fcmb/Authenticate');
const AuthenticatetMock = require('../mock/fcmb/Authenticate');

const { data } = AuthenticatetMock;
const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host, client_id } = data;

describe('FCMB Authenticate', () => {
    it('Should return successful authentication of last 4 digits', async() => {
        scope
            .post('/fcmb/authenticate/Last4Digits', data.validateByLast4Digit.payload)
            .reply(200, AuthenticatetMock.ResponseOne);

        const validate = await Authenticate.validateByLast4Digit({
            sandbox_key,
            payload: data.validateByLast4Digit.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should return successful authentication of customer atm Pin', async() => {
        scope
            .post('/fcmb/authenticate/AtmPIN', data.validateByAtmPin.payload)
            .reply(200, AuthenticatetMock.ResponseOne);

        const validate = await Authenticate.validateByAtmPin({
            sandbox_key,
            payload: data.validateByAtmPin.payload,
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
