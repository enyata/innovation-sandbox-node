const chai = require("chai");
const nock = require("nock");

const SMS = require("../../lib/atlabs/SMS");

const scope = nock("https://sandboxapi.fsi.ng");
const SMSMock = require("../fixtures/atlabs/SMS");

const { expect } = chai;
const { data } = SMSMock;
const { sandbox_key } = data;

describe("SMS", () => {
  it("Should return SMS Service", async () => {
    scope
      .post("/atlabs/messaging", data.SMSService)
      .reply(200, SMSMock.SMSService);

    const validate = await SMS.SMSService({
      sandbox_key,
      payload: data.SMSService
    });
    expect(validate.SMSMessageData).to.have.property("Recipients");
    expect(validate.SMSMessageData).to.have.property("Message");
    expect(validate.SMSMessageData).to.be.an("object");
    expect(validate.SMSMessageData.Recipients).to.be.an("array");
    expect(validate.SMSMessageData.Recipients[0].statusCode).to.equal(101);
  });

  it("Should return Premium Subscription ", async () => {
    scope
      .post("/atlabs/messaging/premium", data.PremiumSub)
      .reply(200, SMSMock.PremiumSub);

    const validate = await SMS.PremiumSub({
      sandbox_key,
      payload: data.PremiumSub
    });
    expect(validate.SMSMessageData).to.have.property("Recipients");
    expect(validate.SMSMessageData).to.have.property("Message");
    expect(validate.SMSMessageData).to.be.an("object");
    expect(validate.SMSMessageData.Recipients).to.be.an("array");
    expect(validate.SMSMessageData.Recipients[0].statusCode).to.equal(101);
  });

  it("Should return Create Premium Subscription ", async () => {
    scope
      .post("/atlabs/messaging/subscription", data.CreatePremiumSub)
      .reply(200, SMSMock.CreatePremiumSub);

    const validate = await SMS.CreatePremiumSub({
      sandbox_key,
      payload: data.CreatePremiumSub
    });
    expect(validate).to.have.property("status");
    expect(validate).to.have.property("description");
    expect(validate.description).to.be.a("string");
    expect(validate.description).to.equal("Waiting for user input");
  });

  it("Should return Delete Premium Subscription", async () => {
    scope
      .post("/atlabs/messaging/subscription/delete", data.DeletePremiumSub)
      .reply(200, SMSMock.DeletePremiumSub);

    const validate = await SMS.DeletePremiumSub({
      sandbox_key,
      payload: data.DeletePremiumSub
    });
    expect(validate).to.have.property("status");
    expect(validate).to.have.property("description");
    expect(validate.description).to.be.a("string");
    expect(validate.description).to.equal("Succeeded");
  });

  it("Should return Fetch Premium Subscription", async () => {
    scope
      .post("/atlabs/messaging/subscription/fetch", data.FetchPremiumSub)
      .reply(200, SMSMock.FetchPremiumSub);

    const validate = await SMS.FetchPremiumSub({
      sandbox_key,
      payload: data.FetchPremiumSub
    });
    expect(validate).to.have.property("responses");
    expect(validate.responses).to.be.an("array");
  });

  it("Should return Fetch Messages ", async () => {
    scope
      .post("/atlabs/messaging/fetch", data.FetchMessage)
      .reply(200, SMSMock.FetchMessage);

    const validate = await SMS.FetchMessage({
      sandbox_key,
      payload: data.FetchMessage
    });
    expect(validate.SMSMessageData).to.have.property("Messages");
    expect(validate).to.have.property("SMSMessageData");
    expect(validate.SMSMessageData).to.be.an("object");
    expect(validate.SMSMessageData.Messages).to.be.an("array");
  });

});
