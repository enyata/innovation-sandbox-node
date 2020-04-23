const chai = require('chai');
const nock = require('nock');

const Voice = require('../../lib/atlabs/Voice');

const VoiceMock = require('../mock/atlabs/Voice');

const { expect } = chai;
const { data } = VoiceMock;
const { sandbox_key, host } = data;
const scope = nock(host);

describe('Voice', () => {
    it('Should return Voice Call', async() => {
        scope
            .post('/atlabs/voice/call', data.VoiceCall)
            .reply(200, VoiceMock.VoiceCall);

        const validate = await Voice.VoiceCall({
            sandbox_key,
            payload: data.VoiceCall,
            host,
        });
        expect(validate).to.have.property('entries');
        expect(validate).to.have.property('errorMessage');
        expect(validate.entries).to.be.an('array');
    });

    it('Should return Fetch Queue Calls ', async() => {
        scope
            .post('/atlabs/voice/queueStatus', data.FetchQueuedCall)
            .reply(200, VoiceMock.FetchQueuedCall);

        const validate = await Voice.FetchQueueCalls({
            sandbox_key,
            payload: data.FetchQueuedCall,
            host,
        });
        expect(validate).to.have.property('entries');
        expect(validate).to.have.property('errorMessage');
        expect(validate).to.have.property('status');
        expect(validate.entries).to.be.an('array');
        expect(validate.status).to.equal('Success');
    });

    it('Should return upload ', async() => {
        scope
            .post('/atlabs/voice/queueStatus', data.UploadMediaFile)
            .reply(200, VoiceMock.UploadMediaFile);

        const validate = await Voice.FetchQueueCalls({
            sandbox_key,
            payload: data.UploadMediaFile,
            host,
        });
        expect(validate).to.have.property('response');
        expect(validate.response).to.be.a('string');
    });
});
