const request = require('../../common/Request');
const {
    Handler,
    ApiErrors,
    ModuleError,
} = require('../../common/utils/errors');

let options;
exports.trigger = async({
    method = 'POST', path, credentials, payload,
}) => {
    try {
        const host = credentials.host || null;

        if (path.includes('token')) {
            options = {
                headers: {
                    'Sandbox-Key': credentials.sandbox_key,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                form: payload,
            };
        } else {
            options = {
                headers: {
                    'Sandbox-Key': credentials.sandbox_key,
                    'Content-Type': 'application/json',
                },
                body: payload,
                json: true,
            };
        }

        if (credentials.params) {
            options.qs = { ...credentials.params };
        }

        const response = await request.http({
            method,
            host,
            path,
            options,
        });

        if (response.statusCode !== 200) {
            return new ApiErrors(Handler.Api(response.statusCode));
        }

        return response.body;
    } catch (error) {
        if (error.statusCode) {
            throw new ApiErrors(Handler.Api(error.statusCode));
        }
        throw new ModuleError(Handler.Module(error));
    }
};
