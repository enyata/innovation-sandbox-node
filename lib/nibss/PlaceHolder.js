const request = require('../common/Request');

exports.ValidateRecord = async(data) => {
    try {
        const payload = data.Record;
        return await request.trigger({
            method: 'POST',
            path: '/nibss/BVNPlaceHolder/ValidateRecord',
            credentials: { ...data },
            payload,
        });
    } catch (error) {
        return error;
    }
};


exports.ValidateRecords = async(data) => {
    try {
        const payload = { ...data.Records };
        return await request.trigger({
            method: 'POST',
            path: '/nibss/BVNPlaceHolder/ValidateRecords',
            credentials: { ...data },
            payload,
        });
    } catch (error) {
        return error;
    }
};
