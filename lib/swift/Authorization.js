const request = require('./common/Request');

exports.oauth2 = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/swift/oauth2/v1/token',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
