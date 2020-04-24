const request = require('./common/request');

exports.Providers = async data => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/relianceHMO/utilities/providers',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.States = async data => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/relianceHMO/utilities/states',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.Benefits = async data => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/relianceHMO/utilities/benefits',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.Titles = async data => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/relianceHMO/utilities/titles',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.Occupations = async data => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/relianceHMO/utilities/occupations',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.MaritalStatuses = async data => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/relianceHMO/utilities/marital_statuses',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
