const request = require('../../common/Request');
const HASH = require('./Hash');
const { Handler, ApiErrors, ModuleError } = require('../../common/utils/errors');

exports.trigger = async({
    method = 'POST', path, credentials, payload, user_headers,
}) => {
    let headers;
    try {
        const {
            host, customer_key, customer_secret, access_token,
        } = credentials;
        const tokenString = `${customer_key}:${customer_secret}`;
        if (access_token) {
            headers = {
                'Sandbox-Key': credentials.sandbox_key,
                'Content-Type': 'application/json',
                Authorization: `Bearer ${access_token}`,
            };
        } else {
            headers = {
                'Sandbox-Key': credentials.sandbox_key,
                Authorization: `Basic ${HASH.base64(tokenString)}`,
            };
        }

        headers = { ...user_headers, ...headers };
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
