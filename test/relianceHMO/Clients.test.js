const chai = require('chai');
const nock = require('nock');

const Clients = require('../../lib/relianceHMO/Clients');
const ClientsMock = require('../mock/relianceHMO/Clients');

const { expect } = chai;
const { data } = ClientsMock;

const { sandbox_key, host, id } = data;

const scope = nock(host);

describe('Clients', () => {
    it('Should return Clients Signup data ', async() => {
        scope
            .post('/relianceHMO/clients/signup')
            .reply(200, ClientsMock.Signup);

        const validate = await Clients.Signup({
            sandbox_key,
            payload: data.Signup,
            host,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('object');
    });

    it('Should return Client Renew data ', async() => {
        scope
            .put(`/relianceHMO/clients/${id}/renew`)
            .reply(200, ClientsMock.Renew);

        const validate = await Clients.Renew({
            sandbox_key,
            host,
            id,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('object');
    });
});
