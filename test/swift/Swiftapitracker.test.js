const chai = require('chai');
const nock = require('nock');

const SwiftApiTracker = require('../../lib/swift/Swiftapitracker');

const SwiftApiTrackerMock = require('../mock/swift/Swiftapitracker');

const { data } = SwiftApiTrackerMock;

const scope = nock(data.host);
const { expect } = chai;

const { sandbox_key, host, Authorization } = data;

describe('Swift Api Tracker', () => {
    it('Should return successfully put payment status tracker', async() => {
        scope
            .put('/swift/swift-api-tracker/v4/payments/dfvdie4jdjfn/status')
            .reply(200, SwiftApiTrackerMock.paymentStatusTracker);

        const validate = await SwiftApiTracker.status({
            sandbox_key,
            host,
            Authorization,
        });

        expect(validate).to.have.property('Status');
        expect(validate.Status).to.equal('OK');
    });

    it('Should return successfully put payment transaction details', async() => {
        scope
            .get('/swift/swift-api-tracker/v4/payments/dfvdie4jdjfn/transactions')
            .reply(200, SwiftApiTrackerMock.transactionDetails);

        const validate = await SwiftApiTracker.transaction({
            sandbox_key,
            host,
            Authorization,
        });

        expect(validate).to.have.property('uetr');
        expect(validate).to.have.property('transaction_status');
        expect(validate).to.have.property('last_update_time');
        expect(validate).to.have.property('payment_event');
        expect(validate.payment_event).to.instanceOf(Array);
        expect(validate.payment_event[0]).to.have.property('message_name_identification');
        expect(validate.payment_event[0].message_name_identification).to.equal('103');
        expect(validate.payment_event[1].network_reference).to.equal('200608BLKFDE33XXXA8579327826');
    });

    it('Should return successfully put payment cancellation', async() => {
        scope
            .get('/swift/swift-api-tracker/v4/payments/dfvdie4jdjfn/cancellation')
            .reply(200, SwiftApiTrackerMock.cancellation);

        const validate = await SwiftApiTracker.cancellation({
            sandbox_key,
            host,
            Authorization,
            rom: 'BANABEBBXXX',
            business_service: '002',
            case_identification: '123',
            cancellation_reason_information: 'DUPL',
        });

        expect(validate).to.have.property('Status');
        expect(validate.Status).to.equal('OK');
    });
});
