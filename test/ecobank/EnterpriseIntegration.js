const chai = require('chai');
const nock = require('nock');

const EnterpriseIntegration = require('../../lib/ecobank/EnterpriseIntegration');
const EnterpriseIntegrationMock = require('../mock/ecobank/EnterpriseIntegration');

const { data } = EnterpriseIntegrationMock;
const scope = nock(data.host);
const { expect } = chai;

const {
    sandbox_key, host, client_secret, client_id, request_token,
} = data;

describe('EnterpriseIntegration', () => {
    it('generate a token that allows money to be redeemed from an Ecobank ATM terminal anywhere in the country', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-eco-api/xpress/token', data.generateToken.payload)
            .reply(200, EnterpriseIntegrationMock.generateToken);

        const validate = await EnterpriseIntegration.generateToken({
            sandbox_key,
            payload: data.generateToken.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });


        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.sourceCode).to.equal('W3S');
    });
    it('Verify the name of an account holder at Ecobank', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-eco-api/accout/nameInquiry', data.nameInquiry.payload)
            .reply(200, EnterpriseIntegrationMock.nameInquiry);

        const validate = await EnterpriseIntegration.nameInquiry({
            sandbox_key,
            payload: data.nameInquiry.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });


        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.responseCode).to.equal('000');
        expect(validate.data.affiliateCode).to.equal('EGH');
    });
    it('View the account balance, identity information and contact address of an ecobank account holder', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-eco-api/account/balance', data.fetchAccountBalance.payload)
            .reply(200, EnterpriseIntegrationMock.fetchAccountBalance);

        const validate = await EnterpriseIntegration.fetchAccountBalance({
            sandbox_key,
            payload: data.fetchAccountBalance.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });

        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.accountStatus).to.equal('ACTIVE');
        expect(validate.data.accountClass).to.equal('GHSAIN');
    });
    it('The post transfer endpoint allows a 3rd party fintech to post the transactions: Wallet 2 Bank (W2B) and Bank to Wallet (B2W)', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-eco-api/transfer', data.transferFund.payload)
            .reply(200, EnterpriseIntegrationMock.transferFund);

        const validate = await EnterpriseIntegration.transferFund({
            sandbox_key,
            payload: data.transferFund.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });

        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.externalRefNo).to.equal('627034220705508');
        expect(validate.data.paymentReferenceNo).to.equal('627034220705508');
    });
    it('Check the validity of an Ecobank account number.', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-eco-api/transaction/status', data.checkTransactionStatus.payload)
            .reply(200, EnterpriseIntegrationMock.checkTransactionStatus);

        const validate = await EnterpriseIntegration.checkTransactionStatus({
            sandbox_key,
            payload: data.checkTransactionStatus.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });


        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.responseCode).to.equal('000');
        expect(validate.data.responseMessage).to.equal('SUCCESS');
    });
    it('agentNameInquiry', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-unified-api/mock/rt/agent/nameInquiry', data.agentNameInquiry.payload)
            .reply(200, EnterpriseIntegrationMock.agentNameInquiry);

        const validate = await EnterpriseIntegration.agentNameInquiry({
            sandbox_key,
            payload: data.agentNameInquiry.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });


        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.hostHeaderInfo).to.be.an('object');
        expect(validate.data.hostHeaderInfo.partnerId).to.equal('APIGHA');
    });
    it('initiateReceiveCash', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-unified-api/mock/rt/agent/initiateReceiveCash', data.initiateReceiveCash.payload)
            .reply(200, EnterpriseIntegrationMock.initiateReceiveCash);

        const validate = await EnterpriseIntegration.initiateReceiveCash({
            sandbox_key,
            payload: data.initiateReceiveCash.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });

        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.responseMessage).to.equal('SUCCESS');
    });
    it('completeReceive', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-unified-api/mock/rt/agent/completeReceive', data.completeReceiveForAgent.payload)
            .reply(200, EnterpriseIntegrationMock.completeReceiveForAgent);

        const validate = await EnterpriseIntegration.completeReceiveForAgent({
            sandbox_key,
            payload: data.completeReceiveForAgent.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });

        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.responseMessage).to.equal('SUCCESS');
    });
    it('agenttransactionStatus', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-unified-api/mock/rt/agent/transactionStatus', data.agentTransactionStatus.payload)
            .reply(200, EnterpriseIntegrationMock.agentTransactionStatus);

        const validate = await EnterpriseIntegration.agentTransactionStatus({
            sandbox_key,
            payload: data.agentTransactionStatus.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });


        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.hostHeaderInfo.responseMessage).to.equal('SUCCESS');
    });
    it('internationalNameInquiry', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-international-remittance/international/nameInquiry', data.internationalNameInquiry.payload)
            .reply(200, EnterpriseIntegrationMock.internationalNameInquiry);

        const validate = await EnterpriseIntegration.internationalNameInquiry({
            sandbox_key,
            payload: data.internationalNameInquiry.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });

        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.hostHeaderInfo.responseMessage).to.equal('SUCCESS');
    });
    it('postTransfer', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-international-remittance/international/postTransfer', data.postTransfer.payload)
            .reply(200, EnterpriseIntegrationMock.postTransfer);

        const validate = await EnterpriseIntegration.postTransfer({
            sandbox_key,
            payload: data.postTransfer.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });


        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.hostHeaderInfo.responseMessage).to.equal('SUCCESS');
    });
    it('fetchFeesAndRate', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-international-remittance/international/fetchRateFees', data.fetchFeesAndRate.payload)
            .reply(200, EnterpriseIntegrationMock.fetchFeesAndRate);

        const validate = await EnterpriseIntegration.fetchFeesAndRate({
            sandbox_key,
            payload: data.fetchFeesAndRate.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });


        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.hostHeaderInfo.responseMessage).to.equal('Success');
    });
    it('fetchInstitutionList', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-international-remittance/international/fetchInstitutionsList', data.fetchInstitutionList.payload)
            .reply(200, EnterpriseIntegrationMock.fetchInstitutionList);

        const validate = await EnterpriseIntegration.fetchInstitutionList({
            sandbox_key,
            payload: data.fetchInstitutionList.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });


        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.hostHeaderInfo.responseMessage).to.equal('Success');
    });
    it('internationalTransactionStatus', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-international-remittance/international/transactionStatus', data.internationalTransactionStatus.payload)
            .reply(200, EnterpriseIntegrationMock.internationalTransactionStatus);

        const validate = await EnterpriseIntegration.internationalTransactionStatus({
            sandbox_key,
            payload: data.internationalTransactionStatus.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });


        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.hostHeaderInfo.responseMessage).to.equal('SUCCESS');
    });
    it('fetchRate', async() => {
        scope
            .post('/ecobank/enterpriseIntegration/e-international-remittance/international/fetchRate', data.fetchRate.payload)
            .reply(200, EnterpriseIntegrationMock.fetchRate);

        const validate = await EnterpriseIntegration.fetchRate({
            sandbox_key,
            payload: data.fetchRate.payload,
            request_token,
            client_id,
            client_secret,
            host,
        });


        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.hostHeaderInfo.responseMessage).to.equal('SUCCESS');
    });
});
