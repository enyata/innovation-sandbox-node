const chai = require("chai");
const nock = require("nock");
const hash = require("../../lib/nibss/common/Hash");
const faker = require("faker");

const BVnr = require("../../lib/nibss/Bvnr");
const url = faker.internet.url();

const scope = nock(url);
const { BVNMock } = require("../mock/nibss");

const { expect } = chai;

const organisation_code = `${faker.random.number()}`;
const sandbox_key = faker.random.alphaNumeric();

describe("Bvnr", () => {
  let password, ivkey, aes_key, host = url;

  it("Should return aes_key, password and ivkey if credentials is valid", async () => {
    scope.post("/nibss/bvnr/Reset").reply(200, "", BVNMock.reset);

    const reset = await BVnr.Reset({
      sandbox_key,
      organisation_code,
      host
    });
    password = reset.password;
    ivkey = reset.ivkey;
    aes_key = reset.aes_key;

    expect(reset).to.have.property("ivkey");
    expect(reset).to.have.property("password");
    expect(reset).to.have.property("aes_key");
  });

  it("Should verify single BVN ", async () => {
    const encrypted = hash.encrypt(
      JSON.stringify(BVNMock.VerifySingleBVN),
      aes_key,
      ivkey
    );
    scope.post("/nibss/bvnr/VerifySingleBVN").reply(200, encrypted);
    const validate = await BVnr.VerifySingleBVN({
      bvn: "12345678901",
      sandbox_key,
      organisation_code,
      password,
      ivkey,
      aes_key,
      host
    });
    expect(validate).to.have.property("message");
    expect(validate).to.have.property("data");
    expect(validate.message).to.equal("OK");
    expect(validate.data).to.be.an("object");
    expect(validate.data.ResponseCode).to.equal("00");
  });

  it("Should verify multiple BVN ", async () => {
    const encrypted = hash.encrypt(
      JSON.stringify(BVNMock.VerifyMultipleBVN),
      aes_key,
      ivkey,
      
    );
    scope.post("/nibss/bvnr/VerifyMultipleBVN").reply(200, encrypted);
    const validate = await BVnr.VerifyMultipleBVN({
      bvn: "12345678901, 12345678902, 12345678903",
      sandbox_key,
      organisation_code,
      password,
      ivkey,
      aes_key,
      host
    });
    expect(validate).to.have.property("message");
    expect(validate).to.have.property("data");
    expect(validate.message).to.equal("OK");
    expect(validate.data).to.be.an("object");
    expect(validate.data.ResponseCode).to.equal("00");
    expect(validate.data.ValidationResponses).to.be.an("array");
  });

  it("Should get single BVN ", async () => {
    const encrypted = hash.encrypt(
      JSON.stringify(BVNMock.GetSingleBVN),
      aes_key,
      ivkey
    );
    scope.post("/nibss/bvnr/GetSingleBVN").reply(200, encrypted);
    const validate = await BVnr.GetSingleBVN({
      bvn: "12345678901",
      sandbox_key,
      organisation_code,
      password,
      ivkey,
      aes_key,
      host
    });
    expect(validate).to.have.property("message");
    expect(validate).to.have.property("data");
    expect(validate.message).to.equal("OK");
    expect(validate.data).to.be.an("object");
    expect(validate.data.ResponseCode).to.equal("00");
  });

  it("Should get multiple BVN ", async () => {
    const encrypted = hash.encrypt(
      JSON.stringify(BVNMock.GetMultipleBVN),
      aes_key,
      ivkey
    );
    scope.post("/nibss/bvnr/GetMultipleBVN").reply(200, encrypted);
    const validate = await BVnr.GetMultipleBVN({
      bvn: "12345678901, 12345678902, 12345678903",
      sandbox_key,
      organisation_code,
      password,
      ivkey,
      aes_key,
      host
    });
    expect(validate).to.have.property("message");
    expect(validate).to.have.property("data");
    expect(validate.message).to.equal("OK");
    expect(validate.data).to.be.an("object");
    expect(validate.data.ResponseCode).to.equal("00");
    expect(validate.data.ValidationResponses).to.be.an("array");
  });

  it("Should check if BVN is watchlisted ", async () => {
    const encrypted = hash.encrypt(
      JSON.stringify(BVNMock.IsBVNWatchlisted),
      aes_key,
      ivkey
    );
    scope.post("/nibss/bvnr/IsBVNWatchlisted").reply(200, encrypted);
    const validate = await BVnr.IsBVNWatchlisted({
      bvn: "12345678901",
      sandbox_key,
      organisation_code,
      password,
      ivkey,
      aes_key,
      host
    });
    expect(validate).to.have.property("message");
    expect(validate).to.have.property("data");
    expect(validate.message).to.equal("OK");
    expect(validate.data).to.be.an("object");
    expect(validate.data.ResponseCode).to.equal("00");
  });

  it("Should return error if BVN is incorrect", async () => {
    const encrypted = hash.encrypt(
      JSON.stringify(BVNMock.VerifySingleBVNError),
      aes_key,
      ivkey
    );
    scope.post("/nibss/bvnr/VerifySingleBVN").reply(200, encrypted);
    const validate = await BVnr.VerifySingleBVN({
      bvn: "12345678901,123456789011",
      sandbox_key,
      organisation_code,
      password,
      ivkey,
      aes_key,
      host
    });
    expect(validate).to.have.property("Message");
    expect(validate.Message).to.equal(
      "Unmatched Request, Refer to documentation."
    );
    expect(validate.ResponseCode).to.equal("05");
  });
});
