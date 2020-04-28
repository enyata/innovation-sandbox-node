const chai = require('chai');
const nock = require('nock');

const Main = require('../../lib/relianceHMO/Main');
const MainMock = require('../mock/relianceHMO/Main');

const { expect } = chai;
const { data } = MainMock;

const {
    sandbox_key,
    host,
    params: {
        PlansQuery, EnrolleesQuery, ConsultationsQuery, UploadQuery,
    },
    payload: { EnrolleesBody },
} = data;

const scope = nock(host);

describe('Main ', () => {
    it('Should return Plans data ', async() => {
        scope
            .get('/relianceHMO/plans')
            .query(PlansQuery)
            .reply(200, MainMock.Plans);

        const validate = await Main.Plans({
            sandbox_key,
            host,
            params: PlansQuery,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('object');
    });

    it('Should return Enrollees Get data ', async() => {
        scope
            .get('/relianceHMO/enrollees')
            .query(EnrolleesQuery)
            .reply(200, MainMock.Enrollees);

        const validate = await Main.Enrollees({
            sandbox_key,
            host,
            params: EnrolleesQuery,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('array');
    });

    it('Should return Enrollees Post data ', async() => {
        scope.post('/relianceHMO/enrollees').reply(200, MainMock.Register);

        const validate = await Main.Register({
            sandbox_key,
            host,
            payload: EnrolleesBody,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('object');
    });

    it('Should return Wallet data ', async() => {
        scope.get('/relianceHMO/wallet').reply(200, MainMock.Wallet);

        const validate = await Main.Wallet({
            sandbox_key,
            host,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('object');
    });

    it('Should return Consultations data ', async() => {
        scope
            .post('/relianceHMO/consultations')
            .query(ConsultationsQuery)
            .reply(200, MainMock.Consultations);

        const validate = await Main.Consultations({
            sandbox_key,
            host,
            params: ConsultationsQuery,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('object');
    });

    it('Should return Upload data ', async() => {
        scope
            .post('/relianceHMO/upload')
            .query(UploadQuery)
            .reply(200, MainMock.Upload);

        const validate = await Main.Upload({
            sandbox_key,
            host,
            params: UploadQuery,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('object');
    });
});
