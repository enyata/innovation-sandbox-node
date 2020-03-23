const request = require('./common/request');

exports.CustomerEnquiry = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/union/secured/cbacustomerenquiry',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.CustomerAndAccountEnquiry = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/union/secured/cbacustomeraccountenquiry',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.AccountEnquiry = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/union/secured/cbaaccountenquiry',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.ChangeUserCredentials = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/union/secured/changeusercredentials',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
