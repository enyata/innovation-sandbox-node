const chai = require('chai');
const nock = require('nock');
const faker = require('faker');

const SwiftGpiforCorporate = require('../../lib/swift/SwiftGpiForCorporates');

const SwiftGpiforCorporateMock = require('../mock/swift/SwiftGpiForCorporates');

const { data } = SwiftGpiforCorporateMock;

const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host } = data;

describe('Swift SwiftGpiforCorporate', () => {
    it('Should return succesfull transactions', async() => {
        scope
            .get('/swift/swift-gpi-for-corporates/v4/customers/payments/transactions')
            .reply(200, SwiftGpiforCorporateMock.transactions);

        const validate = await SwiftGpiforCorporate.transactions({
            sandbox_key,
            host,
            Authorization: data.Authorization,
            'x-bic': faker.random.alphaNumeric(),
            client: faker.random.alphaNumeric(),
        });

        expect(validate).to.have.property('payment_transaction');
        expect(validate).to.have.property('next');
        expect(validate.payment_transaction).to.instanceOf(Array);
        expect(validate.next).to.equal('dXNlIHRoaXMgdmFsdWUgdG8gcmVxdWVzdCBuZXh0IHNldCBvZiBkYXRh');
        expect(validate.payment_transaction[0].transaction_status).to.equal('ACCC');
    });

    it('Should return succesfull inbound', async() => {
        scope
            .get('/swift/swift-gpi-for-corporates/v4/customers/payments/inbound')
            .reply(200, SwiftGpiforCorporateMock.inbound);

        const validate = await SwiftGpiforCorporate.inbound({
            sandbox_key,
            host,
            status: 'ACCC',
            Authorization: data.Authorization,
            'x-bic': faker.random.alphaNumeric(),
            client: faker.random.alphaNumeric(),
        });

        expect(validate).to.have.property('payment_transaction');
        expect(validate).to.have.property('next');
        expect(validate.payment_transaction).to.instanceOf(Array);
        expect(validate.next).to.equal(null);
        expect(validate.payment_transaction[0].transaction_status).to.equal(null);
    });
});
