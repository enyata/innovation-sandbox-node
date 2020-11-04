const request = require('./common/request');

exports.airtimeBillers = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/agencybanking/services/thirdpartyagencybanking/getairtimebillers',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.buyAirtime = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/agencybanking/services/thirdpartyagencybanking/buyairtime',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.getAccountBalance = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/agencybanking/services/thirdpartyagencybanking/getbalance',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.customerAccDetails = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/agencybanking/services/thirdpartyagencybanking/getcustomerdetails',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
