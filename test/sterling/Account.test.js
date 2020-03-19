const chai = require("chai");
const nock = require("nock");

const Account = require("../../lib/sterling/Account");

const AccountMock = require("../mock/sterling/Account");

const { expect } = chai;
const { data } = AccountMock;
const { params, host } = data;
const scope = nock(host);

describe("Account", () => {
  it("Should return user data ", async () => {
    scope
      .get("/sterling/TransferAPIs/api/Spay/InterbankNameEnquiry")
      .query(params)
      .reply(200, AccountMock.InterbankNameEnquiry);
    const validate = await Account.InterbankNameEnquiry(data);

    expect(validate).to.have.property("message");
    expect(validate).to.have.property("data");
    expect(validate.message).to.equal("OK");
    expect(validate.data).to.be.an("object");
    expect(validate.data.data).to.have.property("BVN");
  });
});
