const request = require('./common/Request');

exports.status = async(data) => {
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

exports.transaction = async(data) => {
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
