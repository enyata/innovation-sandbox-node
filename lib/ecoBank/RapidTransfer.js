const request = require('./common/request');

exports.initiateAgentReceive = async(data) => {
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

exports.completeReceive = async(data) => {
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
