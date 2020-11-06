const request = require('./common/request');

exports.validateByLast4Digit = async(data) => {
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

exports.validateByAtmPin = async(data) => {
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
