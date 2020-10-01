const request = require('./common/request');

exports.CardType = async(data) => {
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

exports.RetrieveCardType = async(data) => {
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

exports.UpdateCardType = async(data) => {
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

exports.CardRequest = async(data) => {
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

exports.RetrieveCardRequest = async(data) => {
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
