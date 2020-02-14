const request = require('./common/Request');

exports.Name = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/sterling/TransferAPIs/api/Spay/InterbankNameEnquiry',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};
