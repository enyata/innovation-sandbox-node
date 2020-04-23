const chai = require('chai');
const nock = require('nock');

const Utilities = require('../../lib/relianceHMO/Utilities');
const UtilitiesMock = require('../mock/relianceHMO/Utilities');

const { expect } = chai;
const { data } = UtilitiesMock;

const {
    sandbox_key,
    host,
    params: { BenefitsQuery, ProvidersQuery },
} = data;

const scope = nock(host);

describe('Utilities ', () => {
    it('Should return Utilities Providers data ', async() => {
        scope
            .get('/relianceHMO/utilities/providers')
            .query(ProvidersQuery)
            .reply(200, UtilitiesMock.Providers);

        const validate = await Utilities.Providers({
            sandbox_key,
            host,
            params: ProvidersQuery,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('array');
    });

    it('Should return Utilities Benefits data ', async() => {
        scope
            .get('/relianceHMO/utilities/benefits')
            .query(BenefitsQuery)
            .reply(200, UtilitiesMock.Benefits);

        const validate = await Utilities.Benefits({
            sandbox_key,
            host,
            params: BenefitsQuery,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('array');
    });

    it('Should return Utilities States data ', async() => {
        scope.get('/relianceHMO/utilities/states').reply(200, UtilitiesMock.States);

        const validate = await Utilities.States({
            sandbox_key,
            host,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('array');
    });

    it('Should return Utilities Titles data ', async() => {
        scope
            .get('/relianceHMO/utilities/titles')
            .reply(200, UtilitiesMock.Titles);

        const validate = await Utilities.Titles({
            sandbox_key,
            host,
        });

        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('array');
    });

    it('Should return Utilities Occupations data ', async() => {
        scope
            .get('/relianceHMO/utilities/occupations')
            .reply(200, UtilitiesMock.Occupations);

        const validate = await Utilities.Occupations({
            sandbox_key,
            host,
        });


        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('array');
    });

    it('Should return Utilities Marital_statuses data ', async() => {
        scope
            .get('/relianceHMO/utilities/marital_statuses')
            .reply(200, UtilitiesMock.Marital_statuses);

        const validate = await Utilities.Marital_statuses({
            sandbox_key,
            host,
        });


        expect(validate).to.have.property('status');
        expect(validate).to.have.property('data');
        expect(validate.status).to.equal('success');
        expect(validate.data).to.be.an('array');
    });
});
