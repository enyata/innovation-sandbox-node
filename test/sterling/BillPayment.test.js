const chai = require('chai');
const nock = require('nock');

const BillPayment = require('../../lib/sterling/BillPayment');
const BillPaymentMock = require('../mock/sterling/BillPayment');

const { expect } = chai;
const { data } = BillPaymentMock;
const scope = nock(data.host);

const { sandbox_key, host } = data;

describe('Bill Payment', () => {
    it('Should return successful list of bill payments services under a billing company advice', async() => {
        scope
            .post('/sterling/billpaymentapi/api/Spay/BillPaymtAdviceRequestISW', data.BillPaymentAdvice.payload)
            .reply(200, BillPaymentMock.BillPaymentAdvice);
        const validate = await BillPayment.BillPaymentAdvice({
            sandbox_key,
            payload: data.BillPaymentAdvice.payload,
            host,
        });

        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.data.ResponseText).to.equal(
            'The list of all billing services available to a particular billing company.',
        );
        expect(validate.data.data.status).to.equal('00');
    });

    it('Should return list of billing services under a billing company ', async() => {
        scope
            .get('/sterling/billpaymentapi/api/Spay/GetBillersISWRequest')
            .query(data.BillerPaymentItems.params)
            .reply(200, BillPaymentMock.BillerPaymentItems);
        const validate = await BillPayment.BillerPaymentItems({
            params: data.BillerPaymentItems.params,
            host,
        });

        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.data.ResponseText).to.equal(
            'The list of all billing services available to a particular billing company.',
        );
        expect(validate.data.data.status).to.equal('01');
    });

    it('Should return list of all billing services available ', async() => {
        scope
            .get('/sterling/billpaymentapi/api/Spay/GetBillersISWRequest')
            .query(data.BillersISW.params)
            .reply(200, BillPaymentMock.BillersISW);
        const validate = await BillPayment.BillersISW({
            params: data.BillersISW.params,
            host,
        });

        expect(validate).to.have.property('message');
        expect(validate).to.have.property('data');
        expect(validate.message).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.data.ResponseText).to.equal(
            'The list of all billing services available.',
        );
        expect(validate.data.data.status).to.equal('02');
    });
});
