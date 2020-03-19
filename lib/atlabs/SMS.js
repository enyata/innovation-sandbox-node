const request = require('./common/request');

exports.SMSService = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/atlabs/messaging',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.PremiumSubscription = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/atlabs/messaging/premium',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.CreatePremiumSubscription = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/atlabs/messaging/subscription',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.DeletePremiumSubscription = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/atlabs/messaging/subscription/delete',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.FetchPremiumSubscription = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/atlabs/messaging/subscription/fetch',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.FetchMessage = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/atlabs/messaging/fetch',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
