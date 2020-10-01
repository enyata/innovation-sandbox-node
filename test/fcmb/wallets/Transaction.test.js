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
            .query(data.AccountNumber.params)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.AccountNumber({
            sandbox_key,
            params: data.AccountNumber.params,
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
            .query(data.Id.params)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.Id({
            sandbox_key,
            params: data.Id.params,
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
            .post('/fcmb/wallet/Transfer/W2Account', data.W2Account.payload)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.W2Account({
            sandbox_key,
            payload: data.W2Account.payload,
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
            .query(data.BalanceEnqiry.params)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.BalanceEnqiry({
            sandbox_key,
            params: data.BalanceEnqiry.params,
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
            .post('/fcmb/wallet/BankLink', data.BankLink.payload)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.BankLink({
            sandbox_key,
            payload: data.BankLink.payload,
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
            .query(data.Dataplan.params)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.Dataplan({
            sandbox_key,
            params: data.Dataplan.params,
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
            .post('/fcmb/wallet/Transfer/Airtime', data.Airtime.payload)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.Airtime({
            sandbox_key,
            payload: data.Airtime.payload,
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
            .post('/fcmb/wallet/Transfer/Data', data.Data.payload)
            .reply(200, TransactionMock.responseTwo);

        const validate = await Transaction.Data({
            sandbox_key,
            payload: data.Data.payload,
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
