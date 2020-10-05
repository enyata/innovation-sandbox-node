const request = require('../common/request');

exports.createCustomer = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/wallet/Customer',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.updateCustomer = async(data) => {
    try {
        return await request.trigger({
            method: 'PUT',
            path: '/fcmb/wallet/Customer',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.getCustomerByMobileNo = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/wallet/Customer/MobileNo',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.updateCustomerMobileNo = async(data) => {
    try {
        return await request.trigger({
            method: 'PUT',
            path: '/fcmb/wallet/Customer/MobileNo',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.nameEnquiry = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/wallet/Customer/name',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.setPin = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/wallet/Customer/Pin',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.setTransactionPassword = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/wallet/Customer/Password',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
