const chai = require("chai");
const nock = require("nock");

const Access = require("../../lib/union/Access");
const AccessMock = require("../mock/union/Access");

const { expect } = chai;
const { data } = AccessMock;
const scope = nock(data.host);

describe("Access", () => {
  it("Should return Token", async () => {
    scope
      .post("/union/oauth/token", data.payload)
      .reply(200, AccessMock.TokenGeneration);
    const validate = await Access.TokenGeneration(data);

    expect(JSON.parse(validate)).to.have.property("message");
    expect(JSON.parse(validate)).to.have.property("data");
    expect(JSON.parse(validate).data).to.have.property("access_token");
    expect(JSON.parse(validate).data).to.have.property("token_type");
    expect(JSON.parse(validate).data).to.have.property("refresh_token");
    expect(JSON.parse(validate).data).to.be.an("object");
    expect(JSON.parse(validate).data.scope).to.equal("read");
  });
});
