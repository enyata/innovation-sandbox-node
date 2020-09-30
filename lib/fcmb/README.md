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

___

## *Validate Customer By Id([options])*

Validation using the customer id.

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *tokenCode*

This is a token code

### *customerId*

This is the Id of the customer

### *appId*

### *appToken*

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
___

## *Authenticate last 4 Digits([options])*

authentication using the Last four Digits.

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *lastFourDigits*

This is the last 4 digits

### *accountNumber*

This is the customer account number

## fcmb.Authenticate.Last4Digits(credentials)

In additions to the credentials stated above a 'payload' key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Authenticate.Last4Digits({
    sandbox_key: "Your sandbox key",
    client_id: "Your 'x-ibm-client-id' || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        lastFourDigits: "Customer Last 4 digits || '1234'",
        accountNumber: "Customer Account Number || '0123456789'"
    },
    host: "Your host url || null"
}).then(res => {
    //do something
});
```
___

## *Authenticate ATM Pin([options])*

authentication using ATM PIN.

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *pan*

This is the customer PAN number

### *atmPin*

This is the customer ATM Pin

### *accountNumber*

This is the customer account number

### *expiryDate*

This is the expirey date of the customer ATM card

## fcmb.Authenticate.AtmPIN(credentials)

In additions to the credentials stated above a 'payload' key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Authenticate.AtmPIN({
    sandbox_key: "Your sandbox key",
    client_id: "Your 'x-ibm-client-id' || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        pan: "Customer PAN Number || 'Tcx+B7109UY+sSooND8ZrFm4OMuFzMF6dzHQ5lbt9r8='",
        atmPin: "Customer PAN Number || 'C1cRxRUSRkArWinTxk27pw=='",
        accountNumber: "Customer PAN Number || '1715308017'",
        expiryDate: "Customer PAN Number || '2023'"
    },
    host: "Your host url || null"
}).then(res => {
    //do something
});
```
___
