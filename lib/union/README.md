# INNOVATION SANDBOX

## Install

```bash
$ npm install innovation-sandbox
```

## Require UNION Library

```javascript
const { union } = require("innovation-sandbox");
```

## Common Credentials

Below is a list of common credentials.

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### host

This argument is optional in all cases. Defaults to `https://sandboxapi.fsi.ng` if not found.

### accountNumber

The account number of the customer.

### accountType

The type of account a customer uses. It is either CASA or GL.

## Access Token Generation([options])

A Token Generation message is a request to generate a one-time access code also known as token for a UBN-MiServe transaction. This is a token used to validate all other requests.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

###### client_secret

###### client_id

###### grant_type

###### username

###### password

### union.Access.Token(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
union.Access.Token({
  sandbox_key: "Your sandbox_key",
  payload: {
    client_secret: "secret",
    client_id: "web01",
    grant_type: "password",
    username: "ubnclient01",
    password: "w$777"
  },
  host: "Your host || null"
}).then(res => {
  //do something
});
```

## Customer Enquiry([options])

This operation provides basic customer information of a CASA or GL.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

### union.Customer.CustomerEnquiry(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object and also a 'params' key which holds the access token should be added. For example,

```javascript
union.Customer.CustomerEnquiry({
  sandbox_key: "Your sandbox_key",
  host: "Your host || null",
  params: { access_token: "Access Token from Token" },
  payload: {
    accountNumber: "0000791200",
    accountType: "CASA"
  },
  host: "Your host || null"
}).then(res => {
  //do something
});
```

## Account Enquiry([options])

This operation provides basic account information of a CASA or GL.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

### union.Customer.AccountEnquiry(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object and also a 'params' key which holds the access token should be added. For example,

```javascript
union.Customer.AccountEnquiry({
  sandbox_key: "Your sandbox_key",
  host: "Your host || null",
  params: { access_token: "Access Token from Token" },
  payload: {
    accountNumber: "0000791200",
    accountType: "CASA"
  },
  host: "Your host || null"
}).then(res => {
  //do something
});
```

## Customer and Account Enquiry([options])

This operation provides basic customer and account information of a CASA or GL.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

### union.Customer.CustomerAccountEnquiry(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object and also a 'params' key which holds the access token should be added. For example,

```javascript
union.Customer.CustomerAccountEnquiry({
  sandbox_key: "Your sandbox_key",
  host: "Your host || null",
  params: { access_token: "Access Token from Token" },
  payload: {
    accountNumber: "0000791200",
    accountType: "CASA"
  },
  host: "Your host || null"
}).then(res => {
  //do something
});
```

## Change User Credentials([options])

This operation enables client to change password.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

### union.Customer.ChangeUserCredentials(credentials)

In addition to the credentials stated above, a 'payload' key with aforementioned credentials as object of key values should be added to the object and also a 'params' key which holds the access token should be added. For example,

```javascript
union.Customer.ChangeUserCredentials({
  sandbox_key: "Your sandbox_key",
  host: "Your host || null",
  params: { access_token: "Access Token from Token" },
  payload: {
    username: "user1",
    oldPassword: "password2",
    password: "password",
    moduleId: "UNION_ONE",
    clientSecret: "ABC"
  },
  host: "Your host || null"
}).then(res => {
  //do something
});
```
