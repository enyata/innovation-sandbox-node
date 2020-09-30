const request = require('./common/request');

exports.B2btransfers = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/payments/b2b/transfers',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.B2binternaltransfers = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/payments/b2b/internal/transfers',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.Internaltransfers = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/payments/internal/transfers',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.RetrieveInternaltransfers = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/payments/internal/transfers',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.InternaltransfersDateRange = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/payments/internal/transfers/DateRange',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};
