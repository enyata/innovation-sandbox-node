const request = require('../../common/Request');
const { Handler, ApiErrors, ModuleError } = require('../../common/utils/errors');
// const HASH = require('./Hash');

exports.trigger = async({
    method = 'POST', path, credentials, payload,
}) => {
    try {
        const { host } = credentials;
        const options = {
            headers: {
                'Sandbox-Key': credentials.sandbox_key,
                'content-type': [ 'application/json', 'application/xml' ],
                accept: 'application/json',
            },
            body: payload,
            json: true,
        };

        if (credentials.params) {
            options.qs = { ...credentials.params };
        }

        const response = await request.http({
            method, host, path, options,
        });

        if (response.statusCode !== 200) {
            return new ApiErrors(Handler.Api(response.statusCode));
        }

        return typeof response.body === 'object' ? response.body : JSON.parse(response.body);
    } catch (error) {
        if (error.statusCode) {
            throw new ApiErrors(Handler.Api(error.statusCode));
        }
        throw new ModuleError(Handler.Module(error));
    }
};
