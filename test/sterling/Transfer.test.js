const chai = require("chai");
const nock = require("nock");

const Transfer = require("../../lib/sterling/Transfer");

const TransferMock = require("../mock/sterling/Transfer");

const { expect } = chai;
const { data } = TransferMock;
const { params, host } = data;
const scope = nock(host);

describe("Transfer", () => {
  it("Should return user data ", async () => {
    scope
      .get("/sterling/TransferAPIs/api/Spay/InterbankNameEnquiry")
      .query(params)
      .reply(200, TransferMock.InterbankNameEnquiry);
    const validate = await Transfer.InterbankNameEnquiry(data);

    expect(validate).to.have.property("message");
    expect(validate).to.have.property("data");
    expect(validate.message).to.equal("OK");
    expect(validate.data).to.be.an("object");
    expect(validate.data.data).to.have.property("BVN");
  });
});
