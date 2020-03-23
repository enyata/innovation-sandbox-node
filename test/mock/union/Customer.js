const faker = require("faker");

exports.data = {
  sandbox_key: faker.random.alphaNumeric(),
  host: faker.internet.url(),
  params: { access_token: faker.random.alphaNumeric() },
  CustomerEnquiry: {
    accountNumber: faker.random.number(),
    accountType: faker.random.word()
  },
  AccountEnquiry: {
    accountNumber: faker.random.number(),
    accountType: faker.random.word()
  },
  CustomerAndAccountEnquiry: {
    accountNumber: faker.random.number(),
    accountType: faker.random.word()
  },
  ChangeUserCredentials: {
    username: faker.random.word(),
    oldPassword: faker.random.word(),
    password: faker.random.word(),
    moduleId: faker.random.word(),
    clientSecret: faker.random.word()
  }
};

exports.AccountEnquiry = {
  message: "OK",
  data: {
    code: "00",
    message: faker.random.words(),
    accountNumber: faker.random.number(),
    accountName: faker.name.findName(),
    accountBranchCode: faker.random.number(),
    customerNumber: faker.random.number(),
    accountClass: faker.random.word(),
    accountCurrency: faker.random.word(),
    accountType: faker.random.word(),
    availableBalance: faker.random.number(),
    customerAddress: faker.address.streetAddress(),
    customerEmail: faker.internet.email(),
    customerPhoneNumber: faker.random.number()
  }
};

exports.CustomerEnquiry = {
  message: "OK",
  data: {
    code: "00",
    message: faker.random.words(),
    country: "NG",
    countryOfBirth: null,
    dob: faker.date.past(),
    nationality: "NG",
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    otherNames: null,
    customerType: faker.random.word(),
    email: faker.internet.email(),
    phoneNumber: faker.random.number(),
    idType: faker.random.word(),
    idNumber: faker.random.number(),
    countryOfIssue: null,
    effectiveDate: faker.date.past(),
    expiryDate: faker.date.past(),
    addressLine1: faker.address.streetAddress(),
    addressLine2: faker.address.streetAddress(),
    city: faker.random.word(),
    state: faker.random.word(),
    postalCode: null,
    bvn: faker.random.number()
  }
};

exports.CustomerAndAccountEnquiry = {
  message: "OK",
  data: {
    code: "00",
    message: faker.random.words(),
    account: {
      code: "00",
      message: faker.random.words(),
      reference: null,
      accountNumber: faker.random.number(),
      accountName: faker.name.findName(),
      accountBranchCode: faker.random.number(),
      customerNumber: faker.random.number(),
      accountClass: "CA_044",
      accountCurrency: "NGN",
      accountType: faker.random.word(),
      availableBalance: faker.random.number(),
      customerAddress: faker.address.streetAddress(),
      customerEmail: faker.internet.email(),
      customerPhoneNumber: faker.random.number()
    },
    customer: {
      code: "00",
      message: faker.random.words(),
      country: "NG",
      countryOfBirth: null,
      dob: faker.date.past(),
      nationality: "NG",
      lastName: faker.name.lastName(),
      firstName: faker.name.firstName(),
      otherNames: null,
      customerType: "I",
      email: faker.internet.email(),
      phoneNumber: faker.random.number(),
      idType: faker.random.word(),
      idNumber: faker.random.number(),
      countryOfIssue: null,
      effectiveDate: faker.date.past(),
      expiryDate: faker.date.past(),
      addressLine1: faker.address.streetAddress(),
      addressLine2: faker.address.streetAddress(),
      city: faker.random.word(),
      state: faker.random.word(),
      postalCode: null,
      bvn: faker.random.number()
    }
  }
};

exports.ChangeUserCredentials = {
  message: "OK",
  data: {
    code: "00",
    message: faker.random.words(),
    reference: null
  }
};
