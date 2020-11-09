const chai = require('chai');
const nock = require('nock');

const Corporateapi = require('../../lib/ecobank/Corporateapi');
const CorporateapiMock = require('../mock/ecobank/Corporateapi');


const { data } = CorporateapiMock;
const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host } = data;

describe.skip('corporateapi', () => {
    it('Allows merchants to receive payments via debit and credit cards from customers', async() => {
        scope
            .post('/ecobank/corporateapi/merchant/card', data.card.payload)
            .reply(200, CorporateapiMock.card);

        const validate = await Corporateapi.cardPayment({
            sandbox_key,
            payload: data.card.payload,
            Authorization: data.card.access_token,
            host,
        });

        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data.response_message).to.equal('success');
        expect(validate.data.response_code).to.equal('200');
    });
    it('Generates token for merchant authentication and authorization', async() => {
        scope
            .post('/ecobank/corporateapi/user/token', data.token.payload)
            .reply(200, CorporateapiMock.token);

        const validate = await Corporateapi.generateToken({
            sandbox_key,
            payload: data.token.payload,
            host,
        });

        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data.username).to.be.a('string');
        expect(validate.data.token).to.be.a('string');
    });
    it('Allowing merchants to receive payments via customer wallet', async() => {
        scope
            .post('/ecobank/corporateapi/merchant/momo', data.momoPayment.payload)
            .reply(200, CorporateapiMock.momoPayment);

        const validate = await Corporateapi.momoPayment({
            sandbox_key,
            payload: data.momoPayment.payload,
            host,
            Authorization: data.momoPayment.access_token,
        });


        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data.response_code).to.equal('200');
        expect(validate.data.response_message).to.equal('success');
        expect(validate.data.response_content.transactionRef).to.equal('MMOMODR1910259929503');
        expect(validate.data.response_content.transactionRef).to.equal('MMOMODR1910259929503');
        expect(validate.data.response_content.responseMessage).to.equal('Transaction accepted');
    });
    it('Allows the merchant to identify itself to the industry it belongs to', async() => {
        scope
            .post('/ecobank/corporateapi/merchant/getmcc', data.merchantCategoryCode.payload)
            .reply(200, CorporateapiMock.merchantCategoryCode);

        const validate = await Corporateapi.mcc({
            sandbox_key,
            payload: data.merchantCategoryCode.payload,
            host,
            Authorization: data.merchantCategoryCode.access_token,
        });

        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.headerRequest).to.be.an('object');
    });
    it('Allows merchants to register and be assigned a terminal to recieve Qr payments', async() => {
        scope
            .post('/ecobank/corporateapi/merchant/createqr', data.merchantQrCreation.payload)
            .reply(200, CorporateapiMock.merchantQrCreation);

        const validate = await Corporateapi.createQR({
            sandbox_key,
            payload: data.merchantQrCreation.payload,
            host,
            Authorization: data.merchantQrCreation.access_token,
        });

        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.response_code).to.equal('200');
        expect(validate.data.response_message).to.equal('success');
    });
    it('generate EcobankPay Dynamic Qr', async() => {
        scope
            .post('/ecobank/corporateapi/merchant/qr', data.dynamicQrPayment.payload)
            .reply(200, CorporateapiMock.dynamicQrPayment);

        const validate = await Corporateapi.QR({
            sandbox_key,
            payload: data.dynamicQrPayment.payload,
            Authorization: data.dynamicQrPayment.access_token,
            host,
        });


        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.response_code).to.equal('200');
        expect(validate.data.response_status).to.equal('success');
    });
    it('Merchant are able to view their Statements', async() => {
        scope
            .post('/ecobank/corporateapi/merchant/statement', data.statementGeneration.payload)
            .reply(200, CorporateapiMock.statementGeneration);

        const validate = await Corporateapi.statement({
            sandbox_key,
            payload: data.statementGeneration.payload,
            Authorization: data.statementGeneration.access_token,
            host,
        });
        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.response_code).to.equal('200');
        expect(validate.data.response_message).to.equal('success');
    });
    it('Ecobank Partners use this module to make payment to their customers', async() => {
        scope
            .post('/ecobank/corporateapi/payment/payment', data.payment.payload)
            .reply(200, CorporateapiMock.payment);

        const validate = await Corporateapi.payment({
            sandbox_key,
            payload: data.payment.payload,
            host,
        });

        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.response_code).to.equal('200');
        expect(validate.data.response_message).to.equal('success');
    });
});
