const request = require('./common/Request');

exports.Interbank = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/sterling/accountapi/api/Spay/InterbankTransferReq',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
