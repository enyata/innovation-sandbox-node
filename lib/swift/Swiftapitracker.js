const request = require('./common/Request');

exports.paymentStatusTracker = async(data) => {
    try {
        return await request.trigger({
            method: 'PUT',
            path: '/swift/swift-api-tracker/v4/payments/dfvdie4jdjfn/status',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.transactionDetails = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/swift/swift-api-tracker/v4/payments/dfvdie4jdjfn/transactions',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.cancellation = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/swift/swift-api-tracker/v4/payments/dfvdie4jdjfn/cancellation',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
