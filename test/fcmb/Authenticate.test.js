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
            .post('/fcmb/authenticate/Last4Digits', data.Last4Digits.payload)
            .reply(200, AuthenticatetMock.ResponseOne);

        const validate = await Authenticate.Last4Digits({
            sandbox_key,
            payload: data.Last4Digits.payload,
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
            .post('/fcmb/authenticate/AtmPIN', data.AtmPIN.payload)
            .reply(200, AuthenticatetMock.ResponseOne);

        const validate = await Authenticate.AtmPIN({
            sandbox_key,
            payload: data.AtmPIN.payload,
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
