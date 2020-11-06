const request = require('../common/request');

exports.getCustomerKYC = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/wallet/KYC',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.createCustomerKYC = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/wallet/KYC',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
exports.updateCustomerKYC = async(data) => {
    try {
        return await request.trigger({
            method: 'PUT',
            path: '/fcmb/wallet/KYC',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.updateKYCStatus = async(data) => {
    try {
        return await request.trigger({
            method: 'PUT',
            path: '/fcmb/wallet/KYC/Status',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
