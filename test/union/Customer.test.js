const chai = require("chai");
const nock = require("nock");

const Customer = require("../../lib/union/Customer");
const CustomerMock = require("../mock/union/Customer");

const { expect } = chai;
const { data } = CustomerMock;

const scope = nock(data.host);

const { sandbox_key, host, params } = data;

describe("Customer Enquiry", () => {
  it("Should return account data ", async () => {
    scope
      .post("/union/secured/cbaaccountenquiry")
      .query(params)
      .reply(200, CustomerMock.AccountEnquiry);
    const validate = await Customer.AccountEnquiry({
      sandbox_key,
      payload: data.AccountEnquiry,
      host,
      params
    });

    expect(validate).to.have.property("message");
    expect(validate).to.have.property("data");
    expect(validate.message).to.equal("OK");
    expect(validate.data).to.be.an("object");
    expect(validate.data).to.have.property("accountCurrency");
  });

  it("Should return customer data ", async () => {
    scope
      .post("/union/secured/cbacustomerenquiry")
      .query(params)
      .reply(200, CustomerMock.CustomerEnquiry);
    const validate = await Customer.CustomerEnquiry({
      sandbox_key,
      payload: data.CustomerEnquiry,
      host,
      params
    });

    expect(validate).to.have.property("message");
    expect(validate).to.have.property("data");
    expect(validate.message).to.equal("OK");
    expect(validate.data).to.be.an("object");
    expect(validate.data).to.have.property("bvn");
  });

  it("Should return customer and account data ", async () => {
    scope
      .post("/union/secured/cbacustomeraccountenquiry")
      .query(params)
      .reply(200, CustomerMock.CustomerAccountEnquiry);
    const validate = await Customer.CustomerAccountEnquiry({
      sandbox_key,
      payload: data.CustomerAccountEnquiry,
      host,
      params
    });

    expect(validate).to.have.property("message");
    expect(validate).to.have.property("data");
    expect(validate.message).to.equal("OK");
    expect(validate.data).to.be.an("object");
    expect(validate.data).to.have.property("account");
  });

  it("Should return password changed", async () => {
    scope
      .post("/union/secured/changeusercredentials")
      .query(params)
      .reply(200, CustomerMock.ChangeUserCredentials);
    const validate = await Customer.ChangeUserCredentials({
      sandbox_key,
      payload: data.ChangeUserCredentials,
      host,
      params
    });

    expect(validate).to.have.property("message");
    expect(validate).to.have.property("data");
    expect(validate.message).to.equal("OK");
    expect(validate.data).to.be.an("object");
    expect(validate.data).to.have.property("code");
  });
});
