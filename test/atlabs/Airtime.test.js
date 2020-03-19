const chai = require("chai");
const nock = require("nock");

const Airtime = require("../../lib/atlabs/Airtime");

const scope = nock("https://sandboxapi.fsi.ng");
const AirtimeMock = require("../mock/atlabs/Airtime");

const { expect } = chai;
const { data } = AirtimeMock;

describe("Airtime", () => {
  it("Should return Airtime sent", async () => {
    scope
      .post("/atlabs/airtime/send", data.payload)
      .reply(200, AirtimeMock.SendAirtime);
    const validate = await Airtime.SendAirtime(data);    
    expect(validate).to.have.property("errorMessage");
    expect(validate).to.have.property("numSent");
    expect(validate).to.have.property("totalAmount");
    expect(validate).to.have.property("totalDiscount");
    expect(validate).to.have.property("responses");
    expect(validate.responses).to.be.an("array");
    expect(validate.responses[0].status).to.equal("Sent");
  });
});
