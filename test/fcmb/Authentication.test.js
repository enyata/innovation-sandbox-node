const chai = require('chai');
const nock = require('nock');

const Authentication = require('../../lib/fcmb/Authentication');
const AuthenticationtMock = require('../mock/fcmb/Authentication');

const { data } = AuthenticationtMock;
const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host, client_id } = data;

describe('FCMB Authentication', () => {
    it('Should return successful validate by customer Id', async() => {
        scope
            .post('/fcmb/authentication/validateByCustomerId', data.ValidateByCustomerId.payload)
            .reply(200, AuthenticationtMock.ValidateByCustomerId);

        const validate = await Authentication.ValidateByCustomerId({
            sandbox_key,
            payload: data.ValidateByCustomerId.payload,
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
