const request = require('../common/request');

exports.AccountNumber = async(data) => {
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

exports.Id = async(data) => {
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

exports.W2Account = async(data) => {
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

exports.BalanceEnqiry = async(data) => {
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

exports.BankLink = async(data) => {
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

exports.Dataplan = async(data) => {
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

exports.Airtime = async(data) => {
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

exports.Data = async(data) => {
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
