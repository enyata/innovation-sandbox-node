const chai = require('chai');
const nock = require('nock');

const SMS = require('../../lib/atlabs/SMS');
const SMSMock = require('../mock/atlabs/SMS');

const { expect } = chai;
const { data } = SMSMock;

const scope = nock(data.host);

const { sandbox_key, host } = data;

describe('SMS', () => {
    it('Should return SMS Service', async() => {
        scope
            .post('/atlabs/messaging', data.SMSService)
            .reply(200, SMSMock.SMSService);

        const validate = await SMS.SMSService({
            sandbox_key,
            payload: data.SMSService,
            host,
        });
        expect(validate.SMSMessageData).to.have.property('Recipients');
        expect(validate.SMSMessageData).to.have.property('Message');
        expect(validate.SMSMessageData).to.be.an('object');
        expect(validate.SMSMessageData.Recipients).to.be.an('array');
        expect(validate.SMSMessageData.Recipients[0].statusCode).to.equal(101);
    });

    it('Should return Premium Subscription ', async() => {
        scope
            .post('/atlabs/messaging/premium', data.PremiumSubscription)
            .reply(200, SMSMock.PremiumSubscription);

        const validate = await SMS.PremiumSubscription({
            sandbox_key,
            payload: data.PremiumSubscription,
            host,
        });
        expect(validate.SMSMessageData).to.have.property('Recipients');
        expect(validate.SMSMessageData).to.have.property('Message');
        expect(validate.SMSMessageData).to.be.an('object');
        expect(validate.SMSMessageData.Recipients).to.be.an('array');
        expect(validate.SMSMessageData.Recipients[0].statusCode).to.equal(101);
    });

    it('Should return Create Premium Subscription ', async() => {
        scope
            .post('/atlabs/messaging/subscription', data.CreatePremiumSubscription)
            .reply(200, SMSMock.CreatePremiumSubscription);

        const validate = await SMS.CreatePremiumSubscription({
            sandbox_key,
            payload: data.CreatePremiumSubscription,
            host,
        });
        expect(validate).to.have.property('status');
        expect(validate).to.have.property('description');
        expect(validate.description).to.be.a('string');
        expect(validate.description).to.equal('Waiting for user input');
    });

    it('Should return Delete Premium Subscription', async() => {
        scope
            .post(
                '/atlabs/messaging/subscription/delete',
                data.DeletePremiumSubscription,
            )
            .reply(200, SMSMock.DeletePremiumSubscription);

        const validate = await SMS.DeletePremiumSubscription({
            sandbox_key,
            payload: data.DeletePremiumSubscription,
            host,
        });
        expect(validate).to.have.property('status');
        expect(validate).to.have.property('description');
        expect(validate.description).to.be.a('string');
        expect(validate.description).to.equal('Succeeded');
    });

    it('Should return Fetch Premium Subscription', async() => {
        scope
            .post(
                '/atlabs/messaging/subscription/fetch',
                data.FetchPremiumSubscription,
            )
            .reply(200, SMSMock.FetchPremiumSubscription);

        const validate = await SMS.FetchPremiumSubscription({
            sandbox_key,
            payload: data.FetchPremiumSubscription,
            host,
        });
        expect(validate).to.have.property('responses');
        expect(validate.responses).to.be.an('array');
    });

    it('Should return Fetch Messages ', async() => {
        scope
            .post('/atlabs/messaging/fetch', data.FetchMessage)
            .reply(200, SMSMock.FetchMessage);

        const validate = await SMS.FetchMessage({
            sandbox_key,
            payload: data.FetchMessage,
            host,
        });
        expect(validate.SMSMessageData).to.have.property('Messages');
        expect(validate).to.have.property('SMSMessageData');
        expect(validate.SMSMessageData).to.be.an('object');
        expect(validate.SMSMessageData.Messages).to.be.an('array');
    });
});
