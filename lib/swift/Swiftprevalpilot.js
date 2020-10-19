const request = require('./common/Request');

exports.verification = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/swift/swiftprevalpilot/v1/accounts/verification',
            credentials: { ...data },
            payload: data.payload,
            user_headers: {
                LAUApplicationID: data.LAUApplicationID,
                LAUCallTime: data.LAUCallTime,
                LAURequestNonce: data.LAURequestNonce,
                LAUVersion: data.LAUVersion,
                'x-api-key': data['x-api-key'],
                LAUSignature: data.LAUSignature,
                LAUSigned: data.LAUSigned,
            },
        });
    } catch (error) {
        return error;
    }
};
