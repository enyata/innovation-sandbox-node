const request = require('./common/request');

exports.GenerateAccessToken = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/corporateapi/user/token',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
