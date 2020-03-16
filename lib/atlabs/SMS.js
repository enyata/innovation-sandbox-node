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

exports.PremiumSub = async data => {
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

exports.CreatePremiumSub = async data => {
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

exports.DeletePremiumSub = async data => {
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

exports.FetchPremiumSub = async data => {
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
