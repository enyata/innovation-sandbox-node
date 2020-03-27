const request = require('./common/request');

exports.CreateCheckoutToken = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/atlabs/token/checkout',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
