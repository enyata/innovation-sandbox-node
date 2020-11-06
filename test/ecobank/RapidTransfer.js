const chai = require('chai');
const nock = require('nock');

const RapidTransfer = require('../../lib/ecobank/RapidTransfer');
const RapidTransferMock = require('../mock/ecobank/RapidTransfer');

const { data } = RapidTransferMock;
const scope = nock(data.host);
const { expect } = chai;

const {
    sandbox_key, host, request_source_code, client_secret, client_id, request_token,
} = data;

describe('RapidTransfer', () => {
    it('Used by agent to initiate receive cash for beneficiary', async() => {
        scope
            .post('/ecobank/RapidTransfer/channelServices/initiateReceiveForAgent', data.initiateReceiveForAgent.payload)
            .reply(200, RapidTransferMock.initiateReceiveForAgent);

        const validate = await RapidTransfer.initiateReceiveForAgent({
            sandbox_key,
            payload: data.initiateReceiveForAgent.payload,
            request_source_code,
            client_secret,
            client_id,
            request_token,
            host,
        });

        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data.agentCode).to.equal('AGENTVINOD');
        expect(validate.data.clientID).to.equal('BRN');
    });
    it('Used by agent to initiate receive cash for beneficiary', async() => {
        scope
            .post('/ecobank/RapidTransfer/channelServices/completeReceive', data.receiveComplete.payload)
            .reply(200, RapidTransferMock.receiveComplete);

        const validate = await RapidTransfer.receiveComplete({
            sandbox_key,
            payload: data.receiveComplete.payload,
            request_source_code,
            client_secret,
            client_id,
            request_token,
            host,
        });

        expect(validate.message).to.equal('OK');
        expect(validate).to.be.an('object');
        expect(validate.data).to.be.an('object');
        expect(validate.data.clientID).to.equal('ART');
        expect(validate.data.sourceAffiliate).to.equal('ENG');
    });
});
