const chai = require('chai');
const nock = require('nock');

const BVnr = require('../lib/nibss/Bvnr');

const scope = nock('https://innovation-sandbox-backend.herokuapp.com');
const { BVNMock } = require('./fixtures');

const { expect } = chai;

const organisation_code = '11111';
const sandbox_key = '0ae0db703c04119b3db7a03d7f854c13';

describe('Bvnr', () => {
    let password,
        ivkey,
        aes_key;

    it('Should return aes_key, password and ivkey if credentials is valid', async() => {
        scope.post('/nibss/bvnr/Reset').reply(200, '', BVNMock.reset);

        const reset = await BVnr.Reset({
            sandbox_key,
            organisation_code,
        });
        password = reset.password;
        ivkey = reset.ivkey;
        aes_key = reset.aes_key;

        expect(reset).to.have.property('ivkey');
        expect(reset).to.have.property('password');
        expect(reset).to.have.property('aes_key');
    });

    it('Should verify single BVN ', async() => {
        scope.post('/nibss/bvnr/VerifySingleBVN').reply(200, BVNMock.VerifySingleBVN);
        const validate = await BVnr.VerifySingleBVN({
            bvn: '12345678901',
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

    it('Should verify multiple BVN ', async() => {
        scope.post('/nibss/bvnr/VerifyMultipleBVN').reply(200, BVNMock.VerifyMultipleBVN);
        const validate = await BVnr.VerifyMultipleBVN({
            bvn: '12345678901, 12345678902, 12345678903',
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
        expect(validate.data.ValidationResponses).to.be.an('array');
    });

    it('Should get single BVN ', async() => {
        scope.post('/nibss/bvnr/GetSingleBVN').reply(200, BVNMock.GetSingleBVN);
        const validate = await BVnr.GetSingleBVN({
            bvn: '12345678901',
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

    it('Should get multiple BVN ', async() => {
        scope.post('/nibss/bvnr/GetMultipleBVN').reply(200, BVNMock.GetMultipleBVN);
        const validate = await BVnr.GetMultipleBVN({
            bvn: '12345678901, 12345678902, 12345678903',
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
        expect(validate.data.ValidationResponses).to.be.an('array');
    });

    it('Should check if BVN is watchlisted ', async() => {
        scope.post('/nibss/bvnr/IsBVNWatchlisted').reply(200, BVNMock.IsBVNWatchlisted);
        const validate = await BVnr.IsBVNWatchlisted({
            bvn: '12345678901',
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

    it('Should return error if BVN is incorrect', async() => {
        scope.post('/nibss/bvnr/VerifySingleBVN').reply(200, BVNMock.VerifySingleBVNError);
        const validate = await BVnr.VerifySingleBVN({
            bvn: '12345678901,123456789011',
            sandbox_key,
            organisation_code,
            password,
            ivkey,
            aes_key,
        });
        expect(validate).to.have.property('Message');
        expect(validate.Message).to.equal('Unmatched Request, Refer to documentation.');
        expect(validate.ResponseCode).to.equal('05');
    });
});
