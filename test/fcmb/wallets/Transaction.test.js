const chai = require('chai');
const nock = require('nock');

const Transaction = require('../../../lib/fcmb/wallets/Transaction');
const TransactionMock = require('../../mock/fcmb/wallets/Transaction');

const { data } = TransactionMock;
const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host, client_id } = data;


describe('Transaction', () => {
    it('should get Transaction History By AccountNumber', async() => {
        scope
            .get('/fcmb/wallet/Transaction/AccountNumber')
            .query(data.getTransactionHistory.params)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.getTransactionHistory({
            sandbox_key,
            params: data.getTransactionHistory.params,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should allows a wallet customer to retrieve details of a category of wallet transactions.', async() => {
        scope
            .get('/fcmb/wallet/Transaction/Category/Id')
            .query(data.retrieveWalletTransactionDetails.params)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.retrieveWalletTransactionDetails({
            sandbox_key,
            params: data.retrieveWalletTransactionDetails.params,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should Transfer from a wallet to an account', async() => {
        scope
            .post('/fcmb/wallet/Transfer/W2Account', data.wallet2AccountTransfer.payload)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.wallet2AccountTransfer({
            sandbox_key,
            payload: data.wallet2AccountTransfer.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should get Balance Enquiry', async() => {
        scope
            .get('/fcmb/wallet/balanceEnqiry')
            .query(data.balanceEnquiry.params)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.balanceEnquiry({
            sandbox_key,
            params: data.balanceEnquiry.params,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should Create Customer BankLink', async() => {
        scope
            .post('/fcmb/wallet/BankLink', data.createBankLink.payload)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.createBankLink({
            sandbox_key,
            payload: data.createBankLink.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should Get Data Plan', async() => {
        scope
            .get('/fcmb/wallet/Transfer/Dataplan')
            .query(data.getDataPlan.params)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.getDataPlan({
            sandbox_key,
            params: data.getDataPlan.params,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Airtime Top-Up', async() => {
        scope
            .post('/fcmb/wallet/Transfer/Airtime', data.airtimeTopUp.payload)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.airtimeTopUp({
            sandbox_key,
            payload: data.airtimeTopUp.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('should Create Customer BankLink', async() => {
        scope
            .post('/fcmb/wallet/Transfer/Data', data.transferData.payload)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.transferData({
            sandbox_key,
            payload: data.transferData.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });
});
