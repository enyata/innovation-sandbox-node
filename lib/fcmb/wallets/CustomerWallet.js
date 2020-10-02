const request = require('../common/request');

exports.GetBalance = async(data) => {
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

exports.Balance = async(data) => {
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

exports.Create = async(data) => {
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

exports.Customerwallet = async(data) => {
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

exports.ValidateCode = async(data) => {
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
