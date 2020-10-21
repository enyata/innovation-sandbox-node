const chai = require('chai');
const nock = require('nock');
const faker = require('faker');

const SwiftPrevalPilot = require('../../lib/swift/Swiftprevalpilot');

const SwiftPrevalPilottMock = require('../mock/swift/Swiftprevalpilot');

const { data } = SwiftPrevalPilottMock;

const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host, Authorization } = data;

describe('Swift Swiftprevalpilot', () => {
    it('Should return succesfull verification', async() => {
        scope
            .post('/swift/swift-preval-pilot/v1/accounts/verification')
            .reply(200, SwiftPrevalPilottMock.verification);

        const validate = await SwiftPrevalPilot.verification({
            sandbox_key,
            host,
            body: data.verification.payload,
            Authorization,
            'Content-Type': 'application/json',
            LAUApplicationID: `${faker.random.number(4)}`,
            LAUCallTime: faker.date.recent(),
            LAURequestNonce: faker.random.alphaNumeric(27),
            LAUVersion: `${faker.random.number(4)}`,
            'x-api-key': faker.random.alphaNumeric(17),
            LAUSignature: faker.random.alphaNumeric(15),
            LAUSigned: `(ApplAPIKey=${faker.random.alphaNumeric(17)}),(x-bic=${faker.random.alphaNumeric(6)})`,
        });

        expect(validate).to.have.property('correlation_identifier');
        expect(validate).to.have.property('response');
        expect(validate.response).to.instanceOf(Object);
        expect(validate.correlation_identifier).to.equal('SCENARIO1-CORRID-002');
        expect(validate.response.account_validation_status).to.equal('FAIL');
        expect(validate.response.creditor_address_match).to.equal('NOAP');
        expect(validate.response.creditor_account_match).to.equal('NMTC');
    });
});
