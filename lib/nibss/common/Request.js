const request = require('../../common/Request');
const hash = require('./Hash');
const { Handler, ApiErrors, ModuleError } = require('../../common/utils/errors');

exports.trigger = async({
    method = 'POST', path, credentials, payload,
}) => {
    let headers,
        encryptedBVN,
        bvnData;


    try {
        const { host } = credentials;
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
            headers: {
                'Sandbox-Key': credentials.sandbox_key,
                OrganisationCode,
                ...headers,
            },
            body: encryptedBVN,
        };

        const response = await request.http({
            method,
            host,
            path,
            options,
        });
        if (response.statusCode !== 200) {
            return new ApiErrors(Handler.Api(response.statusCode));
        }
        if (response.body) {
            return JSON.parse(hash.decrypt(response.body, credentials.aes_key, credentials.ivkey));
        }

        return {
            password: response.headers.password,
            ivkey: response.headers.ivkey,
            aes_key: response.headers.aes_key,
        };
    } catch (error) {
        if (error.statusCode) {
            throw new ApiErrors(Handler.Api(error.statusCode));
        }
        throw new ModuleError(Handler.Module(error));
    }
};
