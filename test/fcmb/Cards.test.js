const chai = require('chai');
const nock = require('nock');

const Cards = require('../../lib/fcmb/Cards');
const CardsMock = require('../mock/fcmb/Cards');

const { data } = CardsMock;
const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host, client_id } = data;

describe('FCMB Cards', () => {
    it('Should return successful insert a card type', async() => {
        scope
            .post('/fcmb/cards/cardType', data.insertCardType.payload)
            .reply(200, CardsMock.ResponseOne);

        const validate = await Cards.insertCardType({
            sandbox_key,
            payload: data.insertCardType.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('The operation was successful.');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should return card name', async() => {
        scope
            .get('/fcmb/cards/cardType')
            .reply(200, CardsMock.ResponseOne);
        const validate = await Cards.retrieveCardType(data);

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('The operation was successful.');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should return successful updating a card name', async() => {
        scope
            .put('/fcmb/cards/cardType', data.updateCardType.payload)
            .reply(200, CardsMock.ResponseTwo);

        const validate = await Cards.updateCardType({
            sandbox_key,
            payload: data.updateCardType.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('OK');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should return successful create a card request', async() => {
        scope
            .post('/fcmb/cards/cardRequest', data.createCardRequest.payload)
            .reply(200, CardsMock.ResponseOne);

        const validate = await Cards.createCardRequest({
            sandbox_key,
            payload: data.createCardRequest.payload,
            host,
            client_id,
        });

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('The operation was successful.');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });

    it('Should return card request', async() => {
        scope
            .get('/fcmb/cards/cardRequest')
            .reply(200, CardsMock.ResponseOne);
        const validate = await Cards.retrieveCardRequest(data);

        expect(validate).to.have.property('data');
        expect(validate.data.responseData.response).to.equal('The operation was successful.');
        expect(validate.data).to.be.an('object');
        expect(validate.data.description).to.equal('Request Successful');
        expect(validate.data.statusCode).to.equal('200');
    });
});
