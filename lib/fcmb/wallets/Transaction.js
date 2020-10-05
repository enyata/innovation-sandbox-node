const request = require('../common/request');

exports.getTransactionHistory = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/wallet/Transaction/AccountNumber',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.retrieveWalletTransactionDetails = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/wallet/Transaction/Category/Id',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.wallet2AccountTransfer = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/wallet/Transfer/W2Account',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.balanceEnquiry = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/wallet/balanceEnqiry',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.createBankLink = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/wallet/BankLink',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.getDataPlan = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/wallet/Transfer/Dataplan',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.airtimeTopUp = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/wallet/Transfer/Airtime',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.transferData = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/wallet/Transfer/Data',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
