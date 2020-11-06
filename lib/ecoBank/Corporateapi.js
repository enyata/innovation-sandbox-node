const request = require('./common/request');
const hash = require('./common/Hash');

exports.generateAccessToken = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/corporateapi/user/token',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.card = async(data) => {
    try {
        const secureHash = hash.generateSecureHash(data.payload.consumer_lab_key);
        const payload = { ...data.payload, secureHash };
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/corporateapi/merchant/card',
            credentials: { ...data },
            payload,
        });
    } catch (error) {
        return error;
    }
};

exports.momoPayment = async(data) => {
    try {
        const secureHash = hash.generateSecureHash(data.payload.consumer_lab_key);
        const payload = { ...data.payload, secureHash };
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/corporateapi/merchant/momo',
            credentials: { ...data },
            payload,
        });
    } catch (error) {
        return error;
    }
};

exports.merchantCategoryCode = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/corporateapi/merchant/getmcc',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.merchantQrCreation = async(data) => {
    try {
        const secureHash = hash.generateSecureHash(data.payload.consumer_lab_key);
        const payload = { ...data.payload, secureHash };
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/corporateapi/merchant/createqr',
            credentials: { ...data },
            payload,
        });
    } catch (error) {
        return error;
    }
};

exports.dynamicQrPayment = async(data) => {
    try {
        const secureHash = hash.generateSecureHash(data.payload.consumer_lab_key);
        const payload = { ...data.payload, secureHash };
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/corporateapi/merchant/qr',
            credentials: { ...data },
            payload,
        });
    } catch (error) {
        return error;
    }
};

exports.statementGeneration = async(data) => {
    try {
        const secureHash = hash.generateSecureHash(data.payload.consumer_lab_key);
        const payload = { ...data.payload, secureHash };
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/corporateapi/merchant/statement',
            credentials: { ...data },
            payload,
        });
    } catch (error) {
        return error;
    }
};

exports.payment = async(data) => {
    try {
        const secureHash = hash.generateSecureHash(data.payload.consumer_lab_key);
        const payload = { ...data.payload, secureHash };
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/corporateapi/payment/payment',
            credentials: { ...data },
            payload,
        });
    } catch (error) {
        return error;
    }
};