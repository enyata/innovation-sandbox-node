const request = require('./common/request');

exports.initiateReceiveForAgent = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/RapidTransfer/channelServices/initiateReceiveForAgent',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
exports.ReceiveComplete = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/RapidTransfer/channelServices/completeReceive',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
