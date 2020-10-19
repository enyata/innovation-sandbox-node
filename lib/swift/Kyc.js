const request = require('./common/Request');

exports.myEntities = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/swift/kyc/v1/entities/my',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};


exports.counterParty = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/swift/kyc/v1/entities/counterparty',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};
