const chai = require('chai');
const nock = require('nock');

const Kyc = require('../../lib/swift/Kyc');

const KycMock = require('../mock/swift/Kyc');

const { data } = KycMock;

const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host, Authorization } = data;

describe('Swift KYC', () => {
    it('should return successul entity List', async() => {
        scope
            .get('/swift/kyc/v1/entities/my')
            .reply(200, KycMock.entityList);

        const validate = await Kyc.entityList({
            sandbox_key,
            host,
            Authorization,
        });

        expect(validate).to.have.property('myEntity');
        expect(validate.myEntity).to.instanceOf(Array);
        expect(validate.myEntity[0]).to.have.property('legalName');
        expect(validate.myEntity[0]).to.have.property('bic');
        expect(validate.myEntity[0].bic).to.equal('GLOBDESTXXX');
    });

    it('should return successul counterparty', async() => {
        scope
            .get('/swift/kyc/v1/entities/counterparty')
            .reply(200, KycMock.counterParty);

        const validate = await Kyc.counterParty({
            sandbox_key,
            host,
            Authorization,
        });

        expect(validate).to.have.property('myCounterparty');
        expect(validate.myCounterparty).to.instanceOf(Array);
        expect(validate.myCounterparty[0]).to.have.property('legalName');
        expect(validate.myCounterparty[0]).to.have.property('bic');
        expect(validate.myCounterparty[0].legalName).to.equal('LONGBRIDGE BANK N.A.');
    });
});
