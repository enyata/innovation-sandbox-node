const request = require('./common/Request');

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
            path: '/sterling/billpaymentapi/api/Spay/GetBillerPmtItemsRequest',
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
            path: '/sterling/billpaymentapi/api/Spay/GetBillersISWRequest',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};
