const request = require('./common/request');

exports.Signup = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/relianceHMO/clients/signup',
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
            path: `/relianceHMO/clients/${data.id}/renew`,
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
