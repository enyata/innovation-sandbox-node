const request = require('./common/request');

exports.Last4Digits = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/authenticate/Last4Digits',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.AtmPIN = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/authenticate/AtmPIN',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
