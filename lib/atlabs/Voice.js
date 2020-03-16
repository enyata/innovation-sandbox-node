const request = require('./common/request');

exports.VoiceCall = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/atlabs/voice/call',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.FetchQueueCalls = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/atlabs/voice/queueStatus',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.UploadMediaFile = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/atlabs/voice/mediaUpload',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
