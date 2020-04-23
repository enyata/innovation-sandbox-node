const request = require('./common/request');

exports.Plans = async data => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/relianceHMO/plans',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.EnrolleesGet = async data => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/relianceHMO/enrollees',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.EnrolleesPost = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/relianceHMO/enrollees',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.Wallet = async data => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/relianceHMO/wallet',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.Consultations = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/relianceHMO/consultations',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.Upload = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/relianceHMO/upload',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
