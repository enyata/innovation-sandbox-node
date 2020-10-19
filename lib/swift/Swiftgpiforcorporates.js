const request = require('./common/Request');

exports.transactions = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/swift/swiftgpiforcorporates/v4/customers/payments/transactions',
            credentials: { ...data },
            user_headers: {
                'x-bic': data['x-bic'],
                client: data.client,
            },
        });
    } catch (error) {
        return error;
    }
};


exports.inbound = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/swift/swiftgpiforcorporates/v4/customers/payments/inbound',
            credentials: { ...data },
            user_headers: {
                'x-bic': data['x-bic'],
                client: data.client,
            },
            params: data.params,
        });
    } catch (error) {
        return error;
    }
};
