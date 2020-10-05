const request = require('./common/request');

exports.insertCardType = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/cards/cardType',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.retrieveCardType = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/cards/cardType',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.updateCardType = async(data) => {
    try {
        return await request.trigger({
            method: 'PUT',
            path: '/fcmb/cards/cardType',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.createCardRequest = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/fcmb/cards/cardRequest',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.retrieveCardRequest = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/fcmb/cards/cardRequest',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};
