const request = require('./common/Request');
const PATH_CONFIG = require('./path-config/path-config');

exports.InterbankTransferReq = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: PATH_CONFIG.INTERBANK_TRANSFER_REQ_PATH,
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.MobileWalletRequest = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: PATH_CONFIG.MOBILE_WALLET_REQUEST_PATH,
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
