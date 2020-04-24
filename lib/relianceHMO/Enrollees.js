const request = require('./common/request');

exports.Enrollee = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: `/relianceHMO/enrollees/${data.id}`,
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};

exports.Profile = async(data) => {
    try {
        return await request.trigger({
            method: 'PUT',
            path: '/relianceHMO/enrollees/profile',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.Validate = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/relianceHMO/enrollees/validate',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.IdCard = async(data) => {
    try {
        return await request.trigger({
            method: 'GET',
            path: '/relianceHMO/enrollees/id-card',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
