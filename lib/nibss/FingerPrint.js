const request = require('../common/Request');

exports.VerifyFingerPrint = async(data) => {
    try {
        const payload = data.fingerPrintData;
        return await request.trigger({
            method: 'POST',
            path: '/nibss/fp/VerifyFingerPrint',
            credentials: { ...data },
            payload,
        });
    } catch (error) {
        return error;
    }
};
