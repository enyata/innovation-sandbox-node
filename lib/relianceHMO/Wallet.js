const request = require('./common/request');

exports.Fund = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/relianceHMO/wallet/fund',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.Transactions = async data => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/relianceHMO/wallet/transactions',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
