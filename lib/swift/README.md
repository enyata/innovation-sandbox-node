# INNOVATION SANDBOX

## INSTALL

```bash
$ npm install innovation-sandbox
```

## Require SWIFT Library

```javascript
const { swift } = require("innovation-sandbox");
```

## Required Credentials

Below is a list of required credentials.

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### host

This argument is optional in all cases. Defaults to `https://sandboxapi.fsi.ng` if not found.

## Optional Credentials

Below is a list of optiional credentials.

### content-type

It is used in the header. What it takes varies by API.

## *Oauth2 Authorization([options])*

Token Authorization

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *username*

username used for registration

### *password*

password used for registration

### *grant_type*

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### consumer_key

Your consumer key

### consumer_secret

Your consumer secret

### content-type

## swift.Authorization.oauth2(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
swift.Authorization.oauth2({
    sandbox_key: "Your sandbox key",
    consumer_key: "Your customer key || umNvx0EX2LelvDuoG4L4LMA0w2uKAApX",
    consumer_secret: "Your customer secret || blOzfCw2tTtGU9xu"
    "content-type": "application/json",
    payload: {
        username: "Registration Username || aerbukfvdsf",
        password: "Registration Password || efjvqhdfbvajdfbnvjadf",
        grant_type: "Grant Type || password"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *API Payment Status Tracker([options])*

This API is a status confirmation update to inform the Tracker about the updated status of a given payment.

### options

The module accepts options as objects of key-value.

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### access_token

Your access token

### content-type

## swift.SwiftApiTracker.status(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
swift.SwiftApiTracker.status({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  access_token: "Your Access Token || o3VaGWKuDyE9fWAP8uv0Vy09s0Tb",
  host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *API Payment Transaction Details([options])*

This API is a payment query to get detailed information regarding a given payment. It requires the UETR to be known.

### options

The module accepts options as objects of key-value.

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### access_token

Your access token

### content-type

## swift.SwiftApiTracker.transaction(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
swift.SwiftApiTracker.transaction({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  access_token: "Your Access Token || o3VaGWKuDyE9fWAP8uv0Vy09s0Tb",
  host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *API Payment Cancellation([options])*

This provides the list of all billing services available to a particular billing company.

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *rom*

Rom

### *business_service*

Business Service

### *case_identification*

Case identification

### *cancellation_reason_information*

Reasons for cancellation

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### access_token

Your access token

### content-type

## swift.SwiftApiTracker.cancellation(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
swift.SwiftApiTracker.cancellation({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  access_token: "Your Access Token || o3VaGWKuDyE9fWAP8uv0Vy09s0Tb",
  payload: {
      rom: "Rom || BANABEBBXXX",
      business_service: "Business Service || 002",
      case_identification: "Case Identification || 123",
      cancellation_reason_information: "Reasons For Cancellation || DUPL"
  },
  host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *swift preval pilot([options])*

Verify that a beneficiary account could be able to receive incoming funds.

## payload

Request Body

### *correlation_identifier*

Correllation Identifier

### *context*

Context

### *uetr*

### *creditor_account*

Creditors Account Number

### *creditor_name*

Creditor Account Nmae

### *creditor_address*

Creditor Adddress

### *creditor_organisation_identification*

Creditor Organisation Identification

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### access_token

Your access token

### LAUApplicationID

### LAUCallTim

### LAURequestNonce

### LAUVersion

### x-api-key

### LAUSignature

### LAUSigned

### content-type

## swift.SwiftPreValPilot.verification(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
swift.SwiftPreValPilot.verification({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  access_token: "Your Access Token || o3VaGWKuDyE9fWAP8uv0Vy09s0Tb",
  LAUApplicationID: "LAU Application Id || 001",
  LAUCallTime: "LAU Call Time || Id2018-03-23T15:56:26.728Z",
  LAURequestNonce: "LAU Request Nonce || e802ab96-bb3a-4965-9139-5214b9f0f074",
  LAUVersion: "LAU Version || 1.0",
  "x-api-key": "X API Key || umNvx0EX2LelvDuoG4L4LMA0w2uKAApX",
  LAUSignature: "LAU Signature || U1khA8h9Lm1PqzB99fG6uw==",
  LAUSigned: "LAU Signed (ApplAPIKey, x-bic) || (ApplAPIKey=umNvx0EX2LelvDuoG4L4LMA0w2uKAApX),(x-bic=1234567890)",
  payload:  {
      correlation_identifier: "Correllation Identifier || SCENARIO1-CORRID-002",
      context: "Context || BENR",
      uetr: "UETR || b916a97d-a699-4f20-b8c2-2b07e2684a27",
      creditor_account: "Creditor Account || GB3112000000001987426375",
      creditor_name: "Creditor Name || John Doe",
      creditor_address: { country: "Country || GB" },
      creditor_organisation_identification: { any_bic: "Any Bic || BANABEBB" }
  },
  host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___


## *Swift GPI for Corporate Transaction([options])*

This API provides the status of all Pay and trace transactions that have been updated within the specified timeframe.

### options

The module accepts options as objects of key-value.

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### access_token

Your access token

### x-bic

Your x-bic

### client

client

### content-type

## swift.SwiftGpiForCorporates.transactions(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
swift.SwiftGpiForCorporates.transactions({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  access_token: "Your Access Token || o3VaGWKuDyE9fWAP8uv0Vy09s0Tb",
  "x-bic" : "Your X-BIC || 1234567890",
  client: "Client || cclabeb0",
  host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Swift Gpifor Corporate inbound([options])*

This API provides the status of all Inbound tracking transactions that have been updated within the specified timeframe.

### options

The module accepts options as objects of key-value.

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### access_token

Your access token

### x-bic

Your x-bic

### client

client

### content-type

## query

Query Params

### status

transaction status

## swift.SwiftGpiForCorporates.inbound(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
swift.SwiftGpiForCorporates.inbound({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  access_token: "Your Access Token || o3VaGWKuDyE9fWAP8uv0Vy09s0Tb",,
  "x-bic" : "Your X-BIC || 1234567890",
  client: "Client || cclabeb0",
  params: {
      status: "Status || ACCC"
  },
  host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Swift Kyc Entity List([options])*

This API is a list retrieval query that enables you to extract a list of all entities which belong to your KYC group.

### options

The module accepts options as objects of key-value.

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### access_token

Your access token

### content-type

## swift.KYC.entityList(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
swift.KYC.entityList({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  access_token: "Your Access Token || o3VaGWKuDyE9fWAP8uv0Vy09s0Tb",
  host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Swift Kyc Counter Party([options])*

This API is a list retrieval query that enables you to extract a list of all counterparties which granted access to your KYC group.'

### options

The module accepts options as objects of key-value.

## header

Request Header

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### access_token

Your access token

### content-type

## swift.KYC.counterParty(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
swift.KYC.counterParty({
  sandbox_key: "Your sandbox key",
  "content-type": "application/json",
  access_token: "Your Access Token || o3VaGWKuDyE9fWAP8uv0Vy09s0Tb",
  host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___
