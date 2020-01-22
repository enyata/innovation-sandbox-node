exports.ValidateRecord = {
    message: 'OK',
    data: {
      ResponseCode: '00',
      BVN: 'VALID',
      FirstName: 'VALID',
      LastName: 'VALID',
      MiddleName: 'INVALID',
      AccountNumber: 'VALID',
      BankCode: 'VALID'
    }
  };

exports.ValidateRecords = {
  message: 'OK',
  data: { 
      ValidationResponses: [ 
    {
        "ResponseCode": "00",
        "ValidationResponses": [
          {
            "ResponseCode": "00",
            "BVN": "VALID",
            "FirstName": "VALID",
            "LastName": "VALID",
            "MiddleName": "INVALID",
            "AccountNumber": "VALID",
            "BankCode": "VALID"
          },
          {
            "ResponseCode": "00",
            "BVN": "VALID",
            "FirstName": "INVALID",
            "LastName": "VALID",
            "MiddleName": "INVALID",
            "AccountNumber": "VALID",
            "BankCode": "VALID"
          }
        ]
      }
   ] 
}
};
