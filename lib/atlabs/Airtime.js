const request = require('./common/request');

exports.SendAirtime = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/atlabs/airtime/send',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
