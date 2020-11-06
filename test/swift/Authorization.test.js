const chai = require('chai');
const nock = require('nock');

const Oauth2 = require('../../lib/swift/Authorization');

const Oauth2Mock = require('../mock/swift/Authorization');

const { data } = Oauth2Mock;

const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host } = data;

describe('Swift oauthAuthorization', () => {
    it('Should return succesfull Oauth2 using token', async() => {
        scope
            .post('/swift/oauth2/v1/token', data.oauthAuthorization.payload)
            .reply(200, Oauth2Mock.oauth2);

        const validate = await Oauth2.oauth2({
            sandbox_key,
            host,
            payload: data.oauthAuthorization.payload,
            Authorization: data.Authorization,
        });

        expect(validate).to.have.property('token_type');
        expect(validate).to.have.property('access_token');
        expect(validate).to.have.property('refresh_token');
        expect(validate.idm_service).to.equal('KYC_API');
        expect(validate.refresh_token_expires_in).to.equal('86399');
    });
});
