const request = require('./common/Request');
const PATH_CONFIG = require('./path-config/path-config');

exports.BillPaymentAdvice = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/sterling/billpaymentapi/api/Spay/BillPaymtAdviceRequestISW',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.BillerPaymentItems = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: PATH_CONFIG.BILLER_PAYMENT_ITEMS_REQUEST_PATH,
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.BillersISW = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: PATH_CONFIG.BILLER_ISW_REQUEST_PATH,
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};
