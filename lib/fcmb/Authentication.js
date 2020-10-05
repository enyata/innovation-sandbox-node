const request = require('./common/request');

exports.validateByCustomerId = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/authentication/validateByCustomerId',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
