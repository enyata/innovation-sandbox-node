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

exports.InternaltransfersStatus = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/payments/internal/transfers/Status',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.Niptransfers = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/payments/nip/transfers',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.NiptransfersDateRange = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/payments/nip/transfers/DateRange',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.Nipcharge = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/payments/nip/charge',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.Nipbanks = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/payments/nip/banks',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.Nipname = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/payments/nip/name',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.NipStatus = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/payments/nip/Status',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.Nibssstatus = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/payments/nibss/status',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
