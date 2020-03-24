const request = require('./common/request');

exports.Token = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/union/oauth/token',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
