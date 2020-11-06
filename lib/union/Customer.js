const request = require('./common/request');
const PATH_CONFIG = require('./pathConfig/path-config');

exports.CustomerEnquiry = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: PATH_CONFIG.CUSTOMER_ENQUIRY_PATH,
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.CustomerAccountEnquiry = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: PATH_CONFIG.CUSTOMER_ACCOUNT_ENQUIRY_PATH,
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.AccountEnquiry = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: PATH_CONFIG.ACCOUNT_ENQUIRY_PATH,
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.ChangeUserCredentials = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: PATH_CONFIG.CHANGE_USER_CREDENTIALS_PATH,
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
