const chai = require("chai");
const nock = require("nock");

const Access = require("../../lib/union/Access");
const AccessMock = require("../mock/union/Access");

const { expect } = chai;
const { data } = AccessMock;
const scope = nock(data.host);

describe("Access", () => {
  it("Should return Token", async () => {
    scope.post("/union/oauth/token", data.payload).reply(200, AccessMock.Token);
    let validate = await Access.Token(data);
    validate = JSON.parse(validate);

    expect(validate).to.have.property("message");
    expect(validate).to.have.property("data");
    expect(validate.data).to.have.property("access_token");
    expect(validate.data).to.have.property("token_type");
    expect(validate.data).to.have.property("refresh_token");
    expect(validate.data).to.be.an("object");
    expect(validate.data.scope).to.equal("read");
  });
});
