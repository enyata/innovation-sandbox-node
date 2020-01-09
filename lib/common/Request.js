const req = require('request');
const util = require('util');
const hash = require('../nibss/common/Hash');
const { Handler, ApiErrors, ModuleError } = require('./utils/errors');

const request = util.promisify(req);

exports.trigger = async({
    method = 'POST', path, credentials, payload,
}) => {
    let headers,
        encryptedBVN,
        bvnData;
    const baseUrl = credentials.host || 'https://innovation-sandbox-backend.herokuapp.com';

    try {
        const OrganisationCode = Buffer.from(credentials.organisation_code || '').toString('base64');

        if (credentials.aes_key && credentials.ivkey) {
            const {
                aes_key, ivkey, password, organisation_code,
            } = credentials;
            encryptedBVN = hash.encrypt(JSON.stringify(payload), aes_key, ivkey);
            bvnData = hash.BVNData(organisation_code, password);

            headers = {
                Authorization: bvnData.authHeader,
                SIGNATURE: bvnData.signatureHeader,
                SIGNATURE_METH: bvnData.signatureMethodHeader,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            };
        }

        const options = {
            uri: `${baseUrl}${path}`,
            headers: {
                'Sandbox-Key': credentials.sandbox_key,
                OrganisationCode,
                ...headers,
            },
            method,
            body: encryptedBVN,
        };
        let data;

        const response = await request(options);
        if (response.body) {
            data = JSON.parse(hash.decrypt(response.body, credentials.aes_key, credentials.ivkey));
            return data;
        }
        data = {
            password: response.headers.password,
            ivkey: response.headers.ivkey,
            aes_key: response.headers.aes_key,
        };
        return data;
    } catch (error) {
        if (error.statusCode) {
            throw new ApiErrors(Handler.Api(error.statusCode));
        }
        throw new ModuleError(Handler.Module(error));
    }
};
