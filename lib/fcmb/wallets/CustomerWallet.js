const request = require('../common/request');

exports.retrieveWalletBalance = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/wallet/Customerwallet/Balance',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.updateWalletBalance = async(data) => {
    try {
        return await request.trigger({
            method: 'PUT',
            path: '/fcmb/wallet/Customerwallet/Balance',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.createWallet = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/wallet/Customerwallet/new',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.updateWalletStatus = async(data) => {
    try {
        return await request.trigger({
            method: 'PUT',
            path: '/fcmb/wallet/Customerwallet/Status',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.validateWalletCode = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/wallet/validateCode',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};
