# INNOVATION SANDBOX

## Install

```bash
$ npm install innovation-sandbox
```

## Require sterling Library

```javascript
const { sterling } = require("innovation-sandbox");
```

## Common Credentials

Below is a list of required credentials.

### sandbox_key

This can be found in the innovation sandbox dashboard after sign up.

### host

This argument is optional in all cases. Defaults to `https://sandboxapi.fsi.ng` if not found.

### subscription_key

Subscription key which provides access to this API. Found in your Profile.

### Appid

Application ID

### ipval

ip value

## Interbank Name Enquiry([options])

You can query and confirm account details using a valid NUBAN, in any bank.

### options

The module accepts options as objects of key-value.

#### params

Query Params

##### Referenceid

This is the unique number that identifies transactions/request.

##### RequestType

The is the identifier of the request being processed.

##### Translocation

GPS of the originating location of the transaction in longitude & latitude.

##### ToAccount

This is the nuban of the transaction recipient account.

##### destinationbankcode

This is the destination bank's code

### sterling.Transfer.InterbankNameEnquiry(credentials)

In addition to the credentials stated above, a 'params' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
sterling.Transfer.InterbankNameEnquiry({
  sandbox_key: "Your sandbox_key",
  params: {
    Referenceid: "Your Transaction ID || 01",
    RequestType: "Transaction Type || 01",
    Translocation: "Transaction Location Longitude Latitude || 01",
    ToAccount: "Transaction Recipient Account || 0037514056",
    destinationbankcode: "Destination Bank Code || 000001"
  },
  subscription_key: "Your Subscription Key || t",
  Appid: "Your App ID || 69",
  ipval: "Your IP || 0",
  host: "Your host url || null"
}).then(res => {
  //do something
});
```

## Interbank Transfer([options])

You can transfer funds from one bank or a financial institution to another.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

##### Referenceid

This is the unique number that identifies transactions/request.

##### RequestType

The is the identify of the request being processed.

##### SessionID

The is the session id.

##### FromAccount

This is the nuban of the transaction sender account.

##### ToAccount

This is the nuban of the transaction recipient account.

##### Amount

This is the amount sent.

##### Destinationbankcode

This is the destination bank's code

##### NEResponse

##### BenefiName

Account name of the person receiving the transfer

##### PaymentReference

A unique identifier for the transaction

##### OriginatorAccountName

Account name of the transfer initiator

##### translocation

GPS of the originating location of the transaction in longitude & latitude.

### sterling.Account.InterbankTransferReq(credentials)

In additions to the credentials stated above a 'payload' key with addition request credentials as object of key values should be added to the object. For example

```javascript
sterling.Account.InterbankTransferReq({
  sandbox_key: "Your sandbox key",
  payload: {
    Referenceid: "Your Transaction ID || 0101",
    RequestType: "Transaction Type || 01",
    Translocation: "Transaction Location Longitude Latitude || 0101",
    ToAccount: "Transaction Recipient Account || 01",
    Destinationbankcode: "Destination Bank Code || 01",
    SessionID: "Transaction Session ID || 01",
    FromAccount: "Transaction Sender || 01",
    Amount: "Transaction Amount || 01",
    NEResponse: "NEResponse || 01",
    BenefiName: "Transaction Recipient Name || 01",
    PaymentReference: "Input Payment Reference || 01",
    OriginatorAccountName: "Transaction Initiate Account Name || 01",
    translocation: "translocation || 01"
  },
  subscription_key: "Your Subscription Key || t",
  Appid: "Your App ID || 69",
  ipval: "Your IP || 0",
  host: "Your host url || null"
}).then(res => {
  //do something
});
```

## Mobile Wallet Request([options])

Want to perform wallet transactions? It works best with our Mobile Wallet API.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

##### Referenceid

This is the unique number that identifies transactions/request.

##### RequestType

The is the identify of the request being processed.

##### Translocation

GPS of the originating location of the transaction in longitude & latitude.

##### Amount

This is the amount sent.

##### TellerId

##### FromAccount

This is the nuban of the transaction sender account.

##### ToAccount

This is the nuban of the transaction recipient account.

##### ExpCode

##### PaymentReference

A unique identifier for the transaction

##### Remark

This is a remark that describes the purpose of the transaction

### sterling.Account.MobileWalletRequest(credentials)

In additions to the credentials stated above a 'payload' key with addition request credentials as object of key values should be added to the object. For example

```javascript
sterling.Account.MobileWalletRequest({
  sandbox_key: "Your sandbox key",
  payload: {
    Referenceid: "Your Transaction ID || 01",
    RequestType: "Transaction Type || 0",
    Translocation: "Transaction Location Longitude Latitude || 01",
    amt: "Transaction Amount || 2000",
    tellerid: "Transaction Teller ID || 01",
    frmacct: "Transaction Sender Account || 0051561375",
    toacct: "Transaction Recipient Account || 0037514056",
    exp_code: "Transaction exp code || 01",
    paymentRef: "Input Payment Reference || 01",
    remarks: "Transaction remarks || Monthly subscription"
  },
  subscription_key: "Your Subscription Key || t",
  host: "Your host url || null"
}).then(res => {
  //do something
});
```

## Bill Payment Advice([options])
This provides the list of all billing services available to a particular billing company.

### options

The module accepts options as objects of key-value.

#### payload

Request Body

##### Referenceid

This is the unique number that identifies transactions/request.

##### RequestType

The is the identify of the request being processed.

##### Translocation

GPS of the originating location of the transaction in longitude & latitude.

##### Amount

This is the amount to be billed.

##### PaymentCode

This is the specific code for the particular bill service payment

##### Mobile

This is the mobile number of the user

##### SubscriberInformation

##### ActionType

This is the specific action that one wants to perform

##### Nuban

The account number of the user

##### Email

The email address of the user

### sterling.BillPayment.BillPaymentAdvice(credentials)

In additions to the credentials stated above a 'payload' key with addition request credentials as object of key values should be added to the object. For example

```javascript
sterling.BillPayment.BillPaymentAdvice({
  sandbox_key: "Your sandbox key",
  payload: {
    Referenceid: "Your Transaction ID || 01",
    RequestType: "Transaction Type || 0",
    Translocation: "Transaction Location Longitude Latitude || 01",
    amt: "Billing Amount || 2000",
    paymentcode: "Billing Payment Code || 01",
    mobile: "Sender Mobile Number || 08051561375",
    SubscriberInfo1: "Subscriber Information || 0037514056",
    ActionType: "Type Of Billing Action || 01",
    nuban: "Sender Account Number || 0037514056",
    email: "Sender Email Address || sender@gmail.com"
  },
  subscription_key: "Your Subscription Key || t",
  host: "Your host url || null"
}).then(res => {
  //do something
});
```

## Biller Payment Items([options])

This provides the list of all billing services available to a particular billing company.

### options

The module accepts options as objects of key-value.

#### params

Query Params

##### Referenceid

This is the unique number that identifies transactions/request.

##### RequestType

The is the identifier of the request being processed.

##### Translocation

GPS of the originating location of the transaction in longitude & latitude.

##### BillerId

This is the identity of the biller service


### sterling.BillPayment.BillerPaymentItems(credentials)

In addition to the credentials stated above, a 'params' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
sterling.BillPayment.BillerPaymentItems({
  sandbox_key: "Your sandbox_key",
  params: {
    Referenceid: "Your Transaction ID || 01",
    RequestType: "Transaction Type || 01",
    Translocation: "Transaction Location Longitude Latitude || 01",
    Bvn: "Account BVN Number || 2098765428",
    billerid: "Biller Service Identity || 002"
  },
  subscription_key: "Your Subscription Key || t",
  host: "Your host url || null"
}).then(res => {
  //do something
});
```

## Billers ISW([options])

This provides the list of all billing services available.

### options

The module accepts options as objects of key-value.

#### params

Query Params

##### Referenceid

This is the unique number that identifies transactions/request.

##### RequestType

The is the identifier of the request being processed.

##### Translocation

GPS of the originating location of the transaction in longitude & latitude.

### sterling.BillPayment.BillersISW(credentials)

In addition to the credentials stated above, a 'params' key with aforementioned credentials as object of key values should be added to the object. For example,

```javascript
sterling.BillPayment.BillersISW({
  sandbox_key: "Your sandbox_key",
  params: {
    Referenceid: "Your Transaction ID || 01",
    RequestType: "Transaction Type || 01",
    Translocation: "Transaction Location Longitude Latitude || 01",
    Bvn: "Account BVN Number || 2098765428"
  },
  subscription_key: "Your Subscription Key || t",
  host: "Your host url || null"
}).then(res => {
  //do something
});
```


## RUNNING TEST

After installing dependencies, run the command

```bash
$ npm test
```
