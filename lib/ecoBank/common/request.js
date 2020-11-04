const request = require('../../common/Request');
const { Handler, ApiErrors, ModuleError } = require('../../common/utils/errors');
// const HASH = require('./Hash');

exports.trigger = async({
    method = 'POST', path, credentials, payload,
}) => {
    let headers;
    try {
        const { host, access_token, request_token } = credentials;
        if (request_token) {
            headers = {
                'Sandbox-Key': credentials.sandbox_key,
                'content-type': 'application/json',
                'x-client-id': credentials.client_id,
                'x-client-secret': credentials.client_secret,
                'x-request-source-code': credentials.request_source_code,
                'x-request-token': request_token,
            };
        } else if (access_token) {
            headers = {
                'Sandbox-Key': credentials.sandbox_key,
                'content-type': 'application/json',
                Authorization: `Bearer ${access_token}`,
            };
        } else {
            headers = {
                'Sandbox-Key': credentials.sandbox_key,
                'content-type': 'application/json',
            };
        }
        const options = {
            headers,
            body: payload,
            json: true,
        };

        if (credentials.params) {
            options.qs = { ...credentials.params };
        }

        const response = await request.http({
            method, host, path, options,
        });

        console.log('response.statusCode', response.statusCode);
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
