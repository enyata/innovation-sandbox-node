const chai = require('chai');
const nock = require('nock');

const AgencyBanking = require('../../lib/ecobank/Agencybanking');
const AgencyBankingMock = require('../mock/ecobank/Agencybanking');

const { data } = AgencyBankingMock;
const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host } = data;


describe('AgencyBanking', () => {
    it('Get All airtime billers', async() => {
        scope
            .post('/ecobank/agencybanking/services/thirdpartyagencybanking/getairtimebillers', data.airtimeBillers.payload)
            .reply(200, AgencyBankingMock.airtimeBillers);

        const validate = await AgencyBanking.airtimeBillers({
            sandbox_key,
            payload: data.airtimeBillers.payload,
            host,
        });


        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data.header).to.be.an('object');
        expect(validate.data.json.airtimebillers).to.be.an('array');
    });
    it('Send Airtime purchase request', async() => {
        scope
            .post('/ecobank/agencybanking/services/thirdpartyagencybanking/buyairtime', data.buyAirtime.payload)
            .reply(200, AgencyBankingMock.buyAirtime);

        const validate = await AgencyBanking.buyAirtime({
            sandbox_key,
            payload: data.buyAirtime.payload,
            host,
        });


        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data.header).to.be.an('object');
        expect(validate.data.json).to.be.an('object');
    });
    it('compute the commission and also to validate Customer account number', async() => {
        scope
            .post('/ecobank/agencybanking/services/thirdpartyagencybanking/getbalance', data.getAccountBalance.payload)
            .reply(200, AgencyBankingMock.getAccountBalance);

        const validate = await AgencyBanking.balance({
            sandbox_key,
            payload: data.getAccountBalance.payload,
            host,
        });

        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('array');
    });
    it('Get Customer account info for Cash deposit', async() => {
        scope
            .post('/ecobank/agencybanking/services/thirdpartyagencybanking/getcustomerdetails', data.customerAccDetails.payload)
            .reply(200, AgencyBankingMock.customerAccDetails);

        const validate = await AgencyBanking.customerDetails({
            sandbox_key,
            payload: data.customerAccDetails.payload,
            host,
        });

        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.header.responsemessage).to.equal('SUCCESS');
    });
});
