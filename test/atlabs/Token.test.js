const chai = require("chai");
const nock = require("nock");

const Token = require("../../lib/atlabs/Token");

const scope = nock("https://sandboxapi.fsi.ng");
const TokenMock = require("../mock/atlabs/Token");

const { expect } = chai;
const { data } = TokenMock;

describe("Token", () => {
  it("Should return success", async () => {
    scope
      .post("/atlabs/token/checkout", data.payload)
      .reply(200, TokenMock.CreateCheckoutToken);
    const validate = await Token.CreateCheckoutToken(data);
    expect(validate).to.have.property("description");
    expect(validate).to.have.property("token");
    expect(validate.description).to.equal("Success");
    expect(validate.token).to.be.a("string");
  });
});
