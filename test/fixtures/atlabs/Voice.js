const faker = require("faker");

exports.data = {
  sandbox_key: "smskfskjfsmalked",
  VoiceCall: {
    callFrom: `+234${faker.random.number(10000000)}`,
    callTo: `+234${faker.random.number(1000000)}`
  },

  FetchQueuedCall: {
    phoneNumbers: `+234${faker.random.number(1000000)}`
  },

  UploadMediaFile: {
    phoneNumber: `+234${faker.random.number(1000000)}`,
    url: "https://sandbox.fsi.ng/images/svg/fsi-logo-dark.svg"
  }
};

exports.VoiceCall = {
  entries: [],
  errorMessage: `Invalid callerId: +234${faker.random.number(100000)}`
};

exports.FetchQueuedCall = {
  status: "Success",
  entries: [],
  errorMessage: "None"
};

exports.UploadMediaFile = {
  response:
    "The request has been fulfilled and resulted in a new resource being created."
};
