const chai = require('chai');
const nock = require('nock');
const faker = require('faker');

const hash = require('../../lib/nibss/common/Hash');
const BVnr = require('../../lib/nibss/Bvnr');
const FingerPrint = require('../../lib/nibss/FingerPrint');

const url = faker.internet.url();

const scope = nock(url);
const { BVNMock, FingerPrintMock } = require('../mock/nibss');

const { expect } = chai;

const organisation_code = `${faker.random.number()}`;
const sandbox_key = faker.random.alphaNumeric();

describe('FingerPrint', done => {
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

    it('Should verify finger print', async() => {
        const encrypted = hash.encrypt(
            JSON.stringify(FingerPrintMock.VerifyFingerPrint),
            aes_key,
            ivkey,
        );
        scope.post('/nibss/fp/VerifyFingerPrint').reply(200, encrypted);
        const validate = await FingerPrint.VerifyFingerPrint({
            fingerPrintData: {
                BVN: '12345678901',
                DeviceId: 'Z000112BC12',
                ReferenceNumber: '00099201710012205354422',
                FingerImage: {
                    type: 'ISO_2005',
                    position: 'RT',
                    nist_impression_type: '0',
                    value: 'c2RzZnNkZnNzZGY=',
                },
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
});
