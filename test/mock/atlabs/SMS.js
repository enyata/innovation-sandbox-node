const faker = require("faker");

exports.data = {
  sandbox_key: "djjdkdmdfstasjs",
  host: faker.internet.url(),
  SMSService: {
    to: `+234${faker.random.number(10000000)}`,
    from: "FSI",
    message: "Hello World"
  },
  PremiumSubscription: {
    to: `+234${faker.random.number(10000000)}`,
    from: "FSI",
    message: "Hello World",
    keyword: "innovation-sandbox",
    linkId: `${faker.random.number(1000)}`,
    retryDurationInHours: "1"
  },
  CreatePremiumSubscription: {
    shortCode: `${faker.random.number(1000)}`,
    keyword: "innovation-sandbox",
    phoneNumber: `+234${faker.random.number(10000000)}`,
    checkoutToken: `CkTkn_+234${faker.random.alphaNumeric(1000)}`
  },
  DeletePremiumSubscription: {
    shortCode: `${faker.random.number(100)}`,
    keyword: "innovation-sandbox",
    phoneNumber: `+234${faker.random.number(10000000)}`
  },
  FetchPremiumSubscription: {
    shortCode: `${faker.random.number(1000)}`,
    keyword: "innovation-sandbox",
    lastReceivedId: "0"
  },
  FetchMessage: {
    lastReceivedId: "0"
  }
};

exports.SMSService = {
  SMSMessageData: {
    Message: `Sent to 1/1 Total Cost: NGN ${faker.random.number(10000)}`,
    Recipients: [
      {
        statusCode: 101,
        number: `+234${faker.random.number(10000000)}`,
        cost: `NGN ${faker.random.number(10000)}`,
        status: "Success",
        messageId: `ATXid_${faker.random.alphaNumeric(10000)}`
      }
    ]
  }
};

exports.PremiumSubscription = {
  SMSMessageData: {
    Message: "Sent to 1/1",
    Recipients: [
      {
        statusCode: 101,
        number: `+234${faker.random.number(10000000)}`,
        cost: "0",
        status: "Success",
        messageId: `ATXid_${faker.random.alphaNumeric(10000)}`
      }
    ]
  }
};

exports.CreatePremiumSubscription = {
  status: "Success",
  description: "Waiting for user input"
};

exports.DeletePremiumSubscription = {
  status: "Success",
  description: "Succeeded"
};

exports.FetchPremiumSubscription = {
  responses: []
};

exports.FetchMessage = {
  SMSMessageData: {
    Messages: []
  }
};
