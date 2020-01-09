
const request = require('request-promise');

const Reset = async (sandbox_key, organisation_code) => {
    const options = {
        method: 'POST',
        uri: 'https://innovation-sandbox-backend.herokuapp.com/nibss/bvnr/Reset',
        headers: {
            "Sandbox-Key": sandbox_key,
            "OrganisationCode": Buffer.from(organisation_code).toString('base64')
        },
        json: true
    }

    try {
        let data;
        await request(options, (err, res, body) => {
            if (!err) {
                data = {
                    password: res.headers.password,
                    ivkey: res.headers.ivkey,
                    aes_key: res.headers.ivkey
                }
            }
        });
        return data;
    } catch (error) {
        return error;
    }

}
module.exports = {
    Reset
}