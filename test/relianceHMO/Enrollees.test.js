const chai = require("chai");
const nock = require("nock");

const Enrollees = require("../../lib/relianceHMO/Enrollees");
const EnrolleesMock = require("../mock/relianceHMO/Enrollees");

const { expect } = chai;
const { data } = EnrolleesMock;

const {
  sandbox_key,
  host,
  id,
  params: { hmoId, ProfileQuery },
} = data;

const scope = nock(host);

describe("Enrollees ", () => {
  it("Should return Enrollees Profile data ", async () => {
    scope
      .put("/relianceHMO/enrollees/profile")
      .query(ProfileQuery)
      .reply(200, EnrolleesMock.Profile);

    const validate = await Enrollees.Profile({
      sandbox_key,
      host,
      params: ProfileQuery,
    });

    expect(validate).to.have.property("status");
    expect(validate).to.have.property("data");
    expect(validate.status).to.equal("success");
    expect(validate.data).to.be.an("object");
  });

  it("Should return Enrollees Valid data ", async () => {
    scope
      .get("/relianceHMO/enrollees/validate")
      .query(hmoId)
      .reply(200, EnrolleesMock.Validate);

    const validate = await Enrollees.Validate({
      sandbox_key,
      host,
      params: hmoId,
    });

    expect(validate).to.have.property("status");
    expect(validate).to.have.property("data");
    expect(validate.status).to.equal("success");
    expect(validate.data).to.be.an("object");
  });

  it("Should return Enrollees id-card data ", async () => {
    scope
      .get("/relianceHMO/enrollees/id-card")
      .query(hmoId)
      .reply(200, EnrolleesMock.IdCard);

    const validate = await Enrollees.IdCard({
      sandbox_key,
      host,
      params: hmoId,
    });

    expect(validate).to.have.property("status");
    expect(validate).to.have.property("data");
    expect(validate.status).to.equal("success");
    expect(validate.data).to.be.an("object");
  });

  it("Should return Enrollees data ", async () => {
    scope
      .get(`/relianceHMO/enrollees/${id}`)
      .reply(200, EnrolleesMock.Enrollee);

    const validate = await Enrollees.Enrollee({
      sandbox_key,
      host,
      id,
    });

    expect(validate).to.have.property("status");
    expect(validate).to.have.property("data");
    expect(validate.status).to.equal("success");
    expect(validate.data).to.be.an("object");
  });
});
