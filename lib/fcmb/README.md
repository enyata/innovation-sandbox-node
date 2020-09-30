# INNOVATION SANDBOX

## INSTALL

```bash
$ npm install innovation-sandbox
```

## Require FCMB Library

```javascript
const { fcmb } = require("innovation-sandbox");
```

## Required Credentials

Below is a list of required credentials.

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### host

This argument is optional in all cases. Defaults to `https://sandboxapi.fsi.ng` if not found.

### client_id

Client id which provides access to this API. This is used in the header. It can be found in your profile

## Optional Credentials

Below is a list of optiional credentials.

### accept

This is mostly default to application/json except otherwise stated. It is used in the header

### content-type

It is used in the header. What it takes varies by API.

__________________________________________

## Validate Customer By Id([options])

Validation using the customer id.

### options

The module accepts options as objects of key-value.

## payload

Request Body

### tokenCode

This is a token code

### customerId

This is the Id of the customer

### appId

### appToken

## fcmb.Authentication.ValidateByCustomerId(credentials)

In additions to the credentials stated above a 'payload' key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Authentication.ValidateByCustomerId({
    sandbox_key: "Your sandbox key",
    client_id: "Your 'x-ibm-client-id' || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        tokenCode: "The Token Code || 'bef345f7ad6218d0593e3efc59d461510f10e7c4ca4eea85cd6a51f4ad8969cb'",
        customerId: "The Customer Id || '543840320618496'",
        appId: "The App Id || '7883808101629952'",
        appToken: "The App Token || '8cbfd44f70a92c2b3fe08c59d2f479eda4a1c0c40f1469009b7b31b9ee0b44aa'"
    },
    host: "Your host url || null"
}).then(res => {
    //do something
});
```
_______________________________

##
```javascript
fcmb.Payments.B2btransfers({
   sandbox_key: "Your sandbox key",
    client_id: "Your 'x-ibm-client-id' || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
          nameEnquiryRef: "999214190218121217000001177403",
          "destinationInstitutionCode": "999063",
          "channelCode": "2",
          "beneficiaryAccountNumber": "0000000000",
          "beneficiaryAccountName": "OBIOHA O. GODDY",
          "beneficiaryBankVerificationNumber": "1",
          "beneficiaryKYCLevel": "3",
          "originatorAccountName": "OKUBOTE IDOWU OLUWAKEMI",
          "originatorAccountNumber": "0000000000",
          "transactionNarration": "Esb Test",
          "paymentReference": "12345",
          "amount": "100.1",
          "traceId": "12345",
          "chargeAmount": "52.59",
          "platformType": "ESB"
}
})
```