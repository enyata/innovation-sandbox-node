const request = require('./common/request');

exports.Signup = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/relianceHMO/retail/signup',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.Renew = async data => {
    try {
        return await request.trigger({
            method: 'PUT',
            path: '/relianceHMO/retail/renew',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
