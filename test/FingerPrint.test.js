const chai = require('chai');
const nock = require('nock');

const BVnr = require('../lib/nibss/Bvnr');
const FingerPrint = require('../lib/nibss/FingerPrint');

const scope = nock('https://innovation-sandbox-backend.herokuapp.com');
const { BVNMock, FingerPrintMock } = require('./fixtures');


const { expect } = chai;

const organisation_code = '11111';
const sandbox_key = '0ae0db703c04119b3db7a03d7f854c13';

describe('FingerPrint', (done) => {
    let password,
        ivkey,
        aes_key;

    beforeEach(async() => {
        scope.post('/nibss/bvnr/Reset').reply(200, '', BVNMock.reset);
        const reset = await BVnr.Reset({
            sandbox_key,
            organisation_code,
        });
        password = reset.password;
        ivkey = reset.ivkey;
        aes_key = reset.aes_key;
    });

    it('Should verify finger print', async() => {
        scope.post('/nibss/fp/VerifyFingerPrint').reply(200, FingerPrintMock.VerifyFingerPrint);
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
        });
        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.ResponseCode).to.equal('00');
    });
});
