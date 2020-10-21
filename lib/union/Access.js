const request = require('./common/request');
const PATH_CONFIG = require('./pathConfig/path-config');

exports.Token = async data => {
    try {
        return await request.trigger({
            method: 'POST',
            path: PATH_CONFIG.ACCESS_TOKEN_PATH,
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
