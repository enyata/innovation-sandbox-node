const chai = require('chai');
const nock = require('nock');
const faker = require('faker');
const hash = require('../../lib/nibss/common/Hash');

const BVnr = require('../../lib/nibss/Bvnr');
const PlaceHolder = require('../../lib/nibss/PlaceHolder');
const { BVNMock, PlaceHolderMock } = require('../mock/nibss');

const url = faker.internet.url();
const scope = nock(url);

const { expect } = chai;

const organisation_code = `${faker.random.number()}`;
const sandbox_key = faker.random.alphaNumeric();

describe('PlaceHolder', done => {
    let password,
        ivkey,
        aes_key; const
        host = url;

    beforeEach(async() => {
        scope.post('/nibss/bvnr/Reset').reply(200, '', BVNMock.reset);
        const reset = await BVnr.Reset({
            sandbox_key,
            organisation_code,
            host,
        });

        password = reset.password;
        ivkey = reset.ivkey;
        aes_key = reset.aes_key;
    });

    it('Should validate record', async() => {
        const encrypted = hash.encrypt(
            JSON.stringify(PlaceHolderMock.ValidateRecord),
            aes_key,
            ivkey,
        );
        scope.post('/nibss/BVNPlaceHolder/ValidateRecord').reply(200, encrypted);
        const validate = await PlaceHolder.ValidateRecord({
            Record: {
                BVN: '12345678901',
                FirstName: 'Uchenna',
                LastName: 'Okoro',
                MiddleName: 'Adepoju',
                AccountNumber: '0987654321',
                BankCode: '011',
            },
            sandbox_key,
            organisation_code,
            password,
            ivkey,
            aes_key,
            host,
        });
        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.ResponseCode).to.equal('00');
    });

    it('Should validate records', async() => {
        const encrypted = hash.encrypt(
            JSON.stringify(PlaceHolderMock.ValidateRecords),
            aes_key,
            ivkey,
        );
        scope.post('/nibss/BVNPlaceHolder/ValidateRecords').reply(200, encrypted);
        const validate = await PlaceHolder.ValidateRecords({
            Records: [
                {
                    BVN: '12345678901',
                    FirstName: 'Uchenna',
                    LastName: 'Okoro',
                    MiddleName: 'Adepoju',
                    AccountNumber: '0987654321',
                    BankCode: '011',
                },
                {
                    BVN: '12345678912',
                    FirstName: 'Chidi',
                    LastName: 'Seun',
                    MiddleName: 'Joshua',
                    AccountNumber: '0987654329',
                    BankCode: '012',
                },
            ],
            sandbox_key,
            organisation_code,
            password,
            ivkey,
            aes_key,
            host,
        });
        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.ValidationResponses).to.be.an('array');
    });
});
