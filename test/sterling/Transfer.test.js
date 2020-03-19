const chai = require("chai");
const nock = require("nock");

const Transfer = require("../../lib/sterling/Transfer");
const TransferMock = require("../mock/sterling/Transfer");

const { data } = TransferMock;
const scope = nock(data.host);
const { expect } = chai;

describe("Transfer", () => {
  it("Should return successful transaction ", async () => {
    scope
      .post("/sterling/accountapi/api/Spay/InterbankTransferReq", data.payload)
      .reply(200, TransferMock.InterbankTransferReq);

    const validate = await Transfer.InterbankTransferReq(data);

    expect(validate).to.have.property("message");
    expect(validate).to.have.property("data");
    expect(validate.message).to.equal("OK");
    expect(validate.data).to.be.an("object");
    expect(validate.data.data.ResponseText).to.equal(
      "Your transaction has been submitted for processing."
    );
  });
});
