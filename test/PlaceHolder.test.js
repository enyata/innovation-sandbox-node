const chai = require('chai');
const nock = require('nock');

const BVnr = require('../lib/nibss/Bvnr');
const PlaceHolder = require('../lib/nibss/PlaceHolder');
const { BVNMock, PlaceHolderMock } = require('./fixtures');

const scope = nock('https://innovation-sandbox-backend.herokuapp.com');

const { expect } = chai;

const organisation_code = '11111';
const sandbox_key = '0ae0db703c04119b3db7a03d7f854c13';

describe('PlaceHolder', (done) => {
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

    it('Should validate record', async() => {
        scope.post('/nibss/BVNPlaceHolder/ValidateRecord').reply(200, PlaceHolderMock.ValidateRecord);
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
        });
        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.ResponseCode).to.equal('00');
    });

    it('Should validate records', async() => {
        scope.post('/nibss/BVNPlaceHolder/ValidateRecords').reply(200, PlaceHolderMock.ValidateRecords);
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
        });
        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.ValidationResponses).to.be.an('array');
    });
});
