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

exports.CreateCustomer = async(data) => {
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

exports.UpdateCustomer = async(data) => {
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

exports.MobileNo = async(data) => {
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

exports.UpdateMobileNo = async(data) => {
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

exports.Name = async(data) => {
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
exports.Pin = async(data) => {
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
exports.Password = async(data) => {
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
