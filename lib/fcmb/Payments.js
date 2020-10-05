const request = require('./common/request');

exports.b2bSingleTransfer = async(data) => {
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

exports.internalB2BSingleTransfer = async(data) => {
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

exports.createInternalTransfer = async(data) => {
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

exports.getInternalTransfer = async(data) => {
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

exports.internalTransferDateRange = async(data) => {
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

exports.internalTransferStatus = async(data) => {
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

exports.nipSingleFundsTransfer = async(data) => {
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

exports.nipTransferDateRange = async(data) => {
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

exports.insertNIPCharge = async(data) => {
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

exports.getNIPBanks = async(data) => {
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

exports.nipNameEnquiry = async(data) => {
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

exports.nipTransferStatus = async(data) => {
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

exports.nibssPaymentStatus = async(data) => {
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
