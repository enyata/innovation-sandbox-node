const req = require('request');
const util = require('util');

const request = util.promisify(req);
const { Handler, ApiErrors, ModuleError } = require('./utils/errors');

exports.http = async({
    method, host, path, options,
}) => {
    try {
        const baseURL = host || 'https://sandboxapi.fsi.ng';
        const data = {
            uri: `${baseURL}${path}`,
            method,
            ...options,
        };
        return await request(data);
    } catch (error) {
        if (error.statusCode) {
            throw new ApiErrors(Handler.Api(error.statusCode));
        }
        throw new ModuleError(Handler.Module(error));
    }
};
