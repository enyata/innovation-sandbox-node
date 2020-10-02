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

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Authentication.ValidateByCustomerId({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        tokenCode: "The Token Code || bef345f7ad6218d0593e3efc59d461510f10e7c4ca4eea85cd6a51f4ad8969cb",
        customerId: "The Customer Id || 543840320618496",
        appId: "The App Id || 7883808101629952",
        appToken: "The App Token || 8cbfd44f70a92c2b3fe08c59d2f479eda4a1c0c40f1469009b7b31b9ee0b44aa"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
_______________________________

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

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Authenticate.Last4Digits({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        lastFourDigits: "Customer Last 4 digits || 1234",
        accountNumber: "Customer Account Number || 0123456789"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
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

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Authenticate.AtmPIN({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        pan: "Customer PAN Number || Tcx+B7109UY+sSooND8ZrFm4OMuFzMF6dzHQ5lbt9r8=",
        atmPin: "Customer PAN Number || C1cRxRUSRkArWinTxk27pw==",
        accountNumber: "Customer PAN Number || 1715308017",
        expiryDate: "Customer PAN Number || 2023"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Card Type([options])*

Insert a crad type.

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *cardName*

This is the card name to be inserted

## fcmb.Authenticate.Last4Digits(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Cards.CardType({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        cardName: "Card Name To Be Inserted || Aiden Walker"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Card Type([options])*

Retrieve Card Types.

### options

The module accepts options as objects of key-value.

## fcmb.Authenticate.Last4Digits(credentials)

```javascript
fcmb.Cards.RetrieveCardType({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Card Type([options])*

Update a crad type.

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *id*

This is the card id to be updated

### *cardName*

This is the card name to be updated with

## fcmb.Authenticate.Last4Digits(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Cards.UpdateCardType({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        id: "Card Id To Be Updated || 82894591",
        cardName: "Card Name To Be Updated with || Aiden Walker"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Card Request([options])*

create a card request.

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *reasonRequestId*

### *cardProductId*

### *deliveryTypeId*

### *accountNumber*

This is the account number of the card requested

### *accountName*

This is the account name of the card requested

### *branchSOL*

## fcmb.Authenticate.Last4Digits(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Cards.CardRequest({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        reasonRequestId: "Request Id || 68937438",
        cardProductId: "Product Id || 72259952",
        deliveryTypeId: "Type Id || 18830384",
        accountNumber: "Card Account Number || 6378554997622631",
        accountName: "Card Account Name || 6304121005834258",
        branchSOL: "Card Name To Be Inserted || feszu"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *Card Request([options])*

Retrieve Card Requests.

### options

The module accepts options as objects of key-value.

## fcmb.Authenticate.Last4Digits(credentials)

```javascript
fcmb.Cards.RetrieveCardRequest({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

## *B2B Transfer([options])*

Insert a b2bSingleTransfer

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *nameEnquiryRef*

### *destinationInstitutionCode*

### *channelCode*

### *beneficiaryAccountNumber*

This is the beneficiary account number

### *beneficiaryAccountName*

This is the beneficiary account name

### *beneficiaryBankVerificationNumber*

This is the beneficiary BVN number

### *beneficiaryKYCLevel*

Beneficiary KYC Level

### *originatorAccountName*

Sender Account Name

### *originatorAccountNumber*

Sender Account Number

### *transactionNarration*

Transaction Narration

### *paymentReference*

### *amount*

Amount To Be Transfered

### *traceId*

### *chargeAmount*

Transaction Charges

###  *platformType*

## fcmb.Payments.B2btransfers(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Payment.B2btransfers({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
          nameEnquiryRef: "Name Enquiry reference || 999214190218121217000001177403",
          destinationInstitutionCode: "Destination Institution Code || 999063",
          channelCode: "Channel Code || 2",
          beneficiaryAccountNumber: "Beneficiary Account Number || 0000000000",
          beneficiaryAccountName: "Beneficiary Account Name || OBIOHA O. GODDY",
          beneficiaryBankVerificationNumber: "Beneficiary BVN || 100000999094",
          beneficiaryKYCLevel: "Beneficiary KYC Level || 3",
          originatorAccountName: "Originator Account Name || OKUBOTE IDOWU OLUWAKEMI",
          originatorAccountNumber: "Originator Account Number || 0000000000",
          transactionNarration: "Transaction Narration || Esb Test",
          paymentReference: "Payment Reference || 12345",
          amount: "Amount || 100.1",
          traceId: "Trace Id || 12345",
          chargeAmount: "Charge Amount || 52.59",
          platformTyp: "Platform Type || ESB"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    //do something
});
```
___

##  *B2B Internal Transfers([options])*

Insert an internal b2bSingleTransfer

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *debitAccountNo*

Account Number To Be Debited

### *creditAccountNo*

Account Number To Be Credited

### *amount*

Amount To Be Transfered

### *narration*

Transaction Narration

### *remark*

Transaction Remarks

### *reportCode*

Transaction Report Code

## fcmb.Payments.B2binternaltransfers(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Payments.B2binternaltransfers({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        debitAccountNo: "Account Number To Be Debited || 0000000000",
        creditAccountNo: "Account Number To Be Credited || 0000000000",
        amount: Amount To Be Transfered || 19,
        narration: "Transaction Narration || Test Transfer",
        remark: "Transaction Remarks || Test",
        reportCode: "Transaction Report Code || Transfer"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res=> {
    //do something
})
```
___

##  *Internal Transfer([options])*

Allows customer to transfer money within the bank.

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *sourceAccount*

Sender Account Number

### *destinationAccount*

Receiepient Account Number

### *amount*

Amount To Be Transferred

### *narration*

Transaction Narration

### *appId*

### *stan*

### *currency*

Currency

### *charges*

Transaction Charges

### *branchCode*

Branch Code

### *narration2*

Transaction Narration

## fcmb.Payments.Internaltransfers(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Payments.Internaltransfers({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        sourceAccount: "Sender Account Number || 0000000000",
        destinationAccount: "Receipient Account Number || 0000000000",
        amount: Amount To be Transferred || 10,
        narration: "Transaction Narration || TEST",
        appId: "App Id || ETZSW",
        stan: "Stan || 2060083",
        currency: "Currency || NGN",
        charges: {
            amountAndCharges: [
                {
                    fees: "Transaction charges || 3.5"
                }
            ]
        },
        branchCode: "Branch Code || 001",
        narration2: "Transaction Narration || Testing"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Retrieve Internal Transfer([options])*

Allows customer to retrieve details of transfers within the bank.

### options

The module accepts options as objects of key-value.

## params

Optional Query Params

### *accountNumber*

Account Number

## fcmb.Payments.InternaltransfersDateRange(credentials)

In additions to the credentials stated above a params key with addition request credentials as object of key values should be added to the object. For example

## fcmb.Payments.RetrieveInternaltransfers(credentials)

```javascript
fcmb.Payments.RetrieveInternaltransfers({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    params: {
        accountNumber: "Account Number || 0030987619"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Internal Transfers DateRange([options])*

Retrieve inernal transaction by date range

### options

The module accepts options as objects of key-value.

## params

Query Params

### *startDate*

Start Date

### *endDate*

End Date

### *pageNum*

Page Number

### *pageSize*

Page Size

## fcmb.Payments.InternaltransfersDateRange(credentials)

In additions to the credentials stated above a params key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Payments.InternaltransfersDateRange({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    params: {
        startDate: "Start Date || 15-02-2019",
        endDate: "End Date || 15-02-2020",
        pageNum: "Page Number || 1",
        pageSize: "Page Size || 50"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Internal Transfers Status([options])*

Allows customer to retrieve Internal Transaction Status by stan

### options

The module accepts options as objects of key-value.

## params

Query Params

### *stan*

Stan

## fcmb.Payments.InternaltransfersStatus(credentials)

In additions to the credentials stated above a params key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Payments.InternaltransfersStatus({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    params: {
        stan: "stan || 0849284"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Nip Transfers([options])*

Get details of a specific transfer

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *nameEnquiryRef*

### *destinationInstitutionCode*

### *channelCode*

### *beneficiaryAccountNumber*

This is the beneficiary account number

### *beneficiaryAccountName*

This is the beneficiary account name

### *beneficiaryBankVerificationNumber*

This is the beneficiary BVN number

### *beneficiaryKYCLevel*

Beneficiary KYC Level

### *originatorAccountName*

Sender Account Name

### *originatorAccountNumber*

Sender Account Number

### *transactionNarration*

Transaction Narration

### *paymentReference*

### *amount*

Amount To Be Transfered

### *traceId*

### *chargeAmount*

Transaction Charges

###  *platformType*

## fcmb.Payments.Niptransfers(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Payments.Niptransfers({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
          nameEnquiryRef: "Name Enquiry reference || 999214190218121217000001177403",
          destinationInstitutionCode: "Destination Institution Code || 999063",
          channelCode: "Channel Code || 2",
          beneficiaryAccountNumber: "Beneficiary Account Number || 0000000000",
          beneficiaryAccountName: "Beneficiary Account Name || OBIOHA O. GODDY",
          beneficiaryBankVerificationNumber: "Beneficiary BVN || 100000999094",
          beneficiaryKYCLevel: "Beneficiary KYC Level || 3",
          originatorAccountName: "Originator Account Name || OKUBOTE IDOWU OLUWAKEMI",
          originatorAccountNumber: "Originator Account Number || 0000000000",
          transactionNarration: "Transaction Narration || Esb Test",
          paymentReference: "Payment Reference || 12345",
          amount: "Amount || 100.1",
          traceId: "Trace Id || 12345",
          chargeAmount: "Charge Amount || 52.59",
          platformType: "Platform Type || ESB"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Nip Transfers DateRange([options])*

Retrieve NIP transaction by date range

### options

The module accepts options as objects of key-value.

## params

Query Params

### *startDate*

Start Date

### *endDate*

End Date

### *pageNum*

Page Number

### *pageSize*

Page Size

## fcmb.Payments.NiptransfersDateRange(credentials)

In additions to the credentials stated above a params key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Payments.NiptransfersDateRange({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    params: {
        startDate: "Start Date || 15-02-2019",
        endDate: "End Date || 15-02-2020",
        pageNum: "Page Number || 1",
        pageSize: "Page Size || 50"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Nip Charge([options])*

Insert a NIP Charge

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *amount*

Amount

## fcmb.Payments.Nipcharge(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Payments.Nipcharge({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
          amount: Amount || 100.1
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Nip Banks([options])*

Get List of NIP Banks

### options

The module accepts options as objects of key-value.

## fcmb.Payments.Nipbanks(credentials)

```javascript
fcmb.Payments.Nipbanks({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Nip Name([options])*

Get NIP Customer Name Information

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *destinationInstitutionCode*

Destination Institution Code

### *channelCode*

Channel Code

### *accountNumber*

Account Number

## fcmb.Payments.Nipname(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Payments.Nipname({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
          destinationInstitutionCode: "Destination Institution Code || 100991",
          channelCode: "Channel Code || 1008",
          accountNumber: "Account Number || 1007890746"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Nip Status([options])*

Allows customer to retrieve NIP Transaction Status by TraceId

### options

The module accepts options as objects of key-value.

## params

Query Params

### *traceid*

Trace Id

## fcmb.Payments.NipStatus(credentials)

In additions to the credentials stated above a params key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Payments.NipStatus({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    params: {
        traceid: "Trace Id || 0849284"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Nibss Status([options])*

Allows customer to retrieve nibss Transaction Status by TraceId

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *ScheduleId*

Schedule Id

### *ClientId*

Client Id

### *PageNumber*

Page Number

### *Status*

Status

### *Beneficiary*

Beneficiary

### *Amount*

Amount

### *AccountNumber*

Account Number

### *BankCode*

Bank Code

### *Narration*

Narration

### *SerialNo*

Serial Number

### *Reason*

### *Status2*

Status Two

## fcmb.Payments.Nibssstatus(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Payments.Nibssstatus({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        ScheduleId: "Schedule Id || 999214190218121217000001177403",
        ClientId: "Client Id || 89724578779724",
        PageNumber: "Page Number || 2",
        Status: "Status || 5",
        Beneficiary: "Beneficiary Account Name || OBIOHA O. GODDY",
        Amount: "Amount || 100.1",
        AccountNumber: "Account Number || 0000000000",
        BankCode: "Bank Code || 27387",
        Narration: "Narration || Esb Test",
        SerialNo: "Serial Number || N0-12345",
        Reason: "Reason || ESB",
        Status2: "Status Two || Ok"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Wallet Ballance([options])*

Retrieve a wallet Customer balance history

### options

The module accepts options as objects of key-value.

## params

Query Params

### *AccountNumber*

Account Number

## fcmb.Wallets.CustomerWallet.GetBalance(credentials)

In additions to the credentials stated above a params key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.CustomerWallet.GetBalance({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    params: {
        AccountNumber: "Account Number || 0849284"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Wallet Ballance([options])*

UpdateWalletBalance

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *availableBalance*

Current Available Balance

### *bookBalance*

Current Book Balance

### *lien*

Lien

### *updatedBy*

Updated By

### *internalAccountNumber*

Account Number

## fcmb.Wallets.CustomerWallet.Balance(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.CustomerWallet.Balance({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
          availableBalance: Current Available Balance || 100991.89,
          bookBalance: Current Book Balance || 1008.20,
          lien: Lien || 1007890746,
          updatedBy: "Updated By || Olakunle O. Olasile",
          internalAccountNumber: "Account Number || 1007890746"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *New Wallet([options])*

Create Wallet

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *customerId*

Current Id

### *schemeCode*

Scheme Code

### *walletStatus*

Wallet Status

### *createdBy*

Created By

### *accountName*

Account Name

## fcmb.Wallets.CustomerWallet.Balance(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.CustomerWallet.Create({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
          customerId: "Customer Id || gjdnylt10099189",
          schemeCode: "Scheme Code || 1008",
          walletStatus: Wallet Status || true,
          createdBy: "Created By || Olakunle O. Olasile",
          accountName: "Account Name || Olakunle O. Oladosu"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Customer Wallet([options])*

Update Wallet Status

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *internalAccountNumber*

Account Balance

### *status*

Wallet Status

### *modifiedBy*

Modified By

## fcmb.Wallets.CustomerWallet.Customerwallet(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.CustomerWallet.Customerwallet({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
          internalAccountNumber: "Account Number || 100991089",
          status:  Wallet Status || true,
          modifiedBy: "Modified By || Olakunle O. Olasile"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Wallet Validate Code([options])*

Validate Wallet Code

### options

The module accepts options as objects of key-value.

## params

Query Params

### *code*

Validating Code

## fcmb.Wallets.CustomerWallet.GetBalance(credentials)

In additions to the credentials stated above a params key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.CustomerWallet.ValidateCode({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    params: {
        code: "Code || 0849284"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Create Wallet Customer([options])*

Create Customer

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *accountOfficer*

### *address*

Customer Address

### *birthDate*

Customer Birth Date

### *branchCode*

Branch Code

### *bvn*

Customer BVN

### *transactionChannel*

Transaction Channel

### *city*

Customer City

### *country*

Customer Country

### *createdBy*

Created By

### *customerType*

Customer Type

### *email*

Customer Email

### *firstName*

Customer First Name

### *lastName*

Customer Last Name

### *gender*

Customer Gender

### *referralCode*

Referral Code

### *loyaltyPoints*

Loyalty Points

### *mobilePhone*

Customer Mobile Number

### *occupation*

Customer Occupation

### *otherName*

Customer Other Name

### *platformId*

Platform Id

### *secondaryMobilePhone*

Customer Secondary Phone Number

### *State*

Customer State

### *identificationId*

Identification Id

### *walletCustomerStatus*

Wallet Customer Status

### *password*

Password

### *pin*

Pin

### *transactionPassword*

Transaction Password

### *customerTier*

Customer Tier

### *customerBankLinkId*

Customer Bank Link Id

### *isFullyRegistered*

### *sPassword*

### *sPin*

### *sTransactionPassword*

## fcmb.Wallets.Customer.CreateCustomer(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Customer.CreateCustomer({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        accountOfficer: "Account Officer || 100991089",
        address: "Customer Address || 7, Jolaosho street, Aminu Park, Mokola.",
        birthDate: "Customer Birth Date || 19-06-1986",
        branchCode: "Branch Code || 100989",
        bvn: "Customer Bank Verification Number || 100991089",
        transactionChannel: "Transaction Channel || 874935",
        city: "Customer City || Ibadan",
        country: "Customer Country || Nigeria",
        createdBy: "Created By || Olasile O. Ibukun",
        customerType: "Customer Type|| Mid",
        email: "Customer Email || olasile@gmail.com",
        firstName: "Customer First Name || Ibrahim",
        lastName: "Customer Last Name || Skuki",
        gender: "Customer Gender || Male",
        referralCode: "Referral Code || 1001089",
        loyaltyPoints: "Loyalty Points || 991089",
        mobilePhone: "Customer Mobile Number || 09078901256",
        occupation: "Customer Occupation || Coder",
        otherName: "Customer Other Name || Balogun",
        platformId: "Platform Id || 83567905",
        secondaryMobilePhone: "Customer Secondary Mobile Number || 08078901256",
        State: "Customer State || 09078901256",
        identificationId: "Identification Code || 9835780563",
        walletCustomerStatus: "Wallet Customer Status || true",
        password: "Password || hjeghu989u5",
        pin: "Pin || 7245",,
        transactionPassword: "Transaction Password || hjdfhsgfjdi8853",
        customerTier: "Customer Tier || jndfghgu5985",
        customerBankLinkId: "Customer Bank Link Idr || bank-00078901256",
        isFullyRegistered: "Is Fully Registered || true",
        sPassword: "sPassword || hkjwhg89436ygf",
        sPin: "Pin || 8459"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Update Wallet Customer([options])*

Update Customer By Mobile No.

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *accountOfficer*

### *address*

Customer Address

### *agentCode*

### *birthDate*

Customer Birth Date

### *branchCode*

Branch Code

### *transactionChannel*

Transaction Channel

### *country*

Customer Country

### *modifiedBy*

Modified By

### *customerType*

Customer Type

### *email*

Customer Email

### *firstName*

Customer First Name

### *lastName*

Customer Last Name

### *gender*

Customer Gender

### *referralCode*

Referral Code

### *loyaltyPoints*

Loyalty Points

### *mobilePhone*

Customer Mobile Number

### *occupation*

Customer Occupation

### *otherName*

Customer Other Name

### *secondaryMobilePhone*

Customer Secondary Phone Number

### *State*

Customer State

### *identificationNumber*

Identification Number

### *subAgentCode*

Sub Agent Code

### *city*

Customer City

### *bvn*

Customer BVN

### *customerStatus*

Customer Status

### *customerTier*

Customer Tier

### *customerBankLinkId*

Customer Bank Link Id

## fcmb.Wallets.Customer.UpdateCustomer(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Customer.UpdateCustomer({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        accountOfficer: "Account Officer || 100991089",
        address: "Customer Address || 7, Jolaosho street, Aminu Park, Mokola.",
        agentCode: "Agent Code || 76908756",
        birthDate: "Customer Birth Date || 19-06-1986",
        branchCode: "Branch Code || 100989",
        transactionChannel: "Transaction Channel || 874935",
        country: "Customer Country || Nigeria",
        modifiedBy: "Created By || Olasile O. Ibukun",
        customerType: "Customer Type|| Mid",
        email: "Customer Email || olasile@gmail.com",
        firstName: "Customer First Name || Ibrahim",
        lastName: "Customer Last Name || Skuki",
        gender: "Customer Gender || Male",
        referralCode: "Referral Code || 1001089",
        loyaltyPoints: "Loyalty Points || 991089",
        mobilePhone: "Customer Mobile Number || 09078901256",
        occupation: "Customer Occupation || Coder",
        otherName: "Customer Other Name || Balogun",
        secondaryMobilePhone: "Customer Secondary Mobile Number || 08078901256",
        State: "Customer State || 09078901256",
        identificationNumber: "Identification Number || 9835780563",
        subAgentCode: "Sub Agent Code || gfhjgh9835780563",
        city: "Customer City || Ibadan",
        bvn: "Customer Bank Verification Number || 100991089",
        customerStatus: "Customer Status || false",
        customerTier: "Customer Tier || jndfghgu5985"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Wallet Customer Mobile Number([options])*

Get Customer By Mobile No.

### options

The module accepts options as objects of key-value.

## params

Optional Query Params

### *mobileNumber*

Mobile Number

## fcmb.Wallets.Customer.MobileNo(credentials)

In additions to the credentials stated above a params key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Customer.MobileNo({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    params: {
        mobileNumber: "Mobile Number || 08049284128"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Wallet Customer Mobile Number([options])*

Change Mobile No.

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *customerId*

Customer Id

### *newMobileNo*

New Mobile Number

## fcmb.Wallets.Customer.UpdateMobileNo(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Customer.UpdateMobileNo({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
          customerId: "Customer Id || hjrwhg89479238",
          newMobileNo:  "New Mobile Number || 08190776425"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Wallet Customer Name([options])*

Name Enquiry

### options

The module accepts options as objects of key-value.

## params

Query Params

### *mobileNo*

Mobile Number

### *internalAcctNumber*

Internal Account Number

## fcmb.Wallets.Customer.Name(credentials)

In additions to the credentials stated above a params key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Customer.Name({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    params: {
        mobileNo: "Mobile Number || 08049284128",
        internalAcctNumber: "Account Number || 0030849288"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Wallet Customer Password([options])*

Set Password

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *customerId*

Customer Id

### *newPassword*

New Password

## fcmb.Wallets.Customer.Password(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Customer.Password({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
          customerId: "Customer Id || hjrwhg89479238",
          newPassword:  "New Password || jkwsgjnjkdhfb983575903"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Wallet Customer Pin([options])*

Set Pin

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *customerId*

Customer Id

### *newPin*

New Pin

## fcmb.Wallets.Customer.Pin(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Customer.Pin({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
          customerId: "Customer Id || hjrwhg89479238",
          newPin:  "New Pin || jkwsgjnjkdhfb983575903"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Wallet KYC([options])*

Get Customer KYC

### options

The module accepts options as objects of key-value.

## params

Query Params

### *customerId*

Customer Id

## fcmb.Wallets.Kyc.GetKyc(credentials)

In additions to the credentials stated above a params key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Kyc.GetKyc({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    params: {
        customerId: "Customer Id || hgbsfkgj8049284128"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Wallet KYC([options])*

Create Customer KYC

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *customerId*

Current Id

### *identificationId*

Identification Id

### *identificationNumber*

Identification Number

### *picture*

Customer Picture

### *signature*

Customer Signature

### *bvn*

Customer Bank Verification Number

### *representativeType*

Representative Type

### *status*

Status

### *representativePhoneNo*

Representative Phone Number

### *representativeEmail*

Representative Email

## fcmb.Wallets.Kyc.CreateKyc(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Kyc.CreateKyc({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        customerId: "Customer Id || jedkhm10099189",
        identificationId: "Identification Id || jgk-100989",
        identificationNumber: "Identification Number || 189",
        picture: "Picture || https://developer.fcmb.com/node/404",
        signature: "Signature || https://developer.fcmb.com/node/404",
        bvn: "BVN || 10099189",
        representativeType: "Representative Type || 8",
        status: "Status || true",
        representativePhoneNo: "Representative Phone Number || 0810991890",
        representativeEmail: "Representative Email || customer@gmail.com"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Wallet KYC([options])*

Update Customer KYC

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *customerId*

Current Id

### *identificationNumber*

Identification Number

### *bvn*

Customer Bank Verification Number

### *representativeType*

Representative Type

### *status*

Status

### *representativePhoneNo*

Representative Phone Number

### *representativeEmail*

Representative Email

## fcmb.Wallets.Kyc.UpdateKyc(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Kyc.UpdateKyc({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        customerId: "Customer Id || jedkhm10099189",
        identificationNumber: "Identification Number || 189",
        bvn: "BVN || 10099189",
        representativeType: Representative Type || 8,
        status: Status || true,
        representativePhoneNo: "Representative Phone Number || 0810991890",
        representativeEmail: "Representative Email || customer@gmail.com"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Wallet KYC Status([options])*

Update Customer KYC Status

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *customerId*

Customer Id

### *status*

Status

## fcmb.Wallets.Kyc.KycStatus(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Kyc.KycStatus({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
          customerId: "Customer Id || hjrwhg89479238",
          status:  "Status || true"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```

___

##  *Wallet Transaction Account Number([options])*

Get Transaction History By AccountNumber

### options

The module accepts options as objects of key-value.

## params

Query Params

### *internalAccountNumber*

Account Number

## optional params

Optional Query Params

### *startDate*

Start Date

### *endDate*

End date

## fcmb.Wallets.Transaction.AccountNumber(credentials)

In additions to the credentials stated above a params key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Transaction.AccountNumber({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    params: {
        internalAccountNumber: "Account Number || 08049284128",
        startDate: "Start Date || 19-02-2018",
        endDate: "End Date || 19-02-2019"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Wallet Transaction Category By Id([options])*

Allows a wallet customer to retreive details of a category of wallet transactions.

### options

The module accepts options as objects of key-value.

## params

Query Params

### *tranCategoryId*

Transaction Category Id

## fcmb.Wallets.Transaction.Id(credentials)

In additions to the credentials stated above a params key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Transaction.Id({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    params: {
        tranCategoryId: "Transaction Category Id || tran-7838968hjsdmfnoy4765"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Wallet Tranfer From Wallet To Bank([options])*

Transfer from a wallet to an account

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *transactionChannel*

Transaction Channel

### *sourcePhone*

Source Phione Number

### *bvn*

Customer Bank Verification Number

### *destinationAccountNumber*

Recipient Bank Account Number

### *amount*

Amount To Be Transferred

### *narration*

Transfer Narration

### *sourceSchemeCode*

Source Scheme Code

### *tranType*

Transaction Type

### *referenceNo*

Reference Number

### *tranCategoryId*

Transaction Category Id

### *hasFee*

### *tranId*

Transaction Id

### *solId*

Source Scheme Code

### *charges*

Charges Fee And Account

## fcmb.Wallets.Transaction.W2Account(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Transaction.W2Account({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        transactionChannel: "Transaction Channel || e-chanell",
        sourcePhone: "Source Phine Number || 08100991892",
        destinationAccountNumber: "Destination Account Number || 0031009189",
        amount: "Amount || 2999000",
        narration: "Narration || Funding",
        sourceSchemeCode: "Source Scheme Code || jedkhm10099189",
        tranType: "Transaction Type || Live",
        referenceNo: "Reference Number || jedkhm10099189jhwef",
        tranCategoryId: "Transaction Category Id || 50",
        hasFee: true,
        tranId: "Transaction Id || jedkhm10099189nrwk",
        solId: "SolId || jedkhm10099189lrhkn",
        charges: [
            {
                account: "Account || 0310099189",
                fee: "Fee || 20.00"
            }
        ]
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Wallet Balance Enquiry([options])*

Balance Enquiry

### options

The module accepts options as objects of key-value.

## params

Query Params

### *schemeCode*

Scheme Code

## optional params

Optional Query Params

### *phoneNumber*

Phone Number

## fcmb.Wallets.Transaction.BalanceEnqiry(credentials)

In additions to the credentials stated above a params key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Transaction.BalanceEnqiry({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    params: {
        schemeCode: "Scheme Code || wehjnhkn049284128",
        phoneNumber: "Phone Number || 09087641970"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Customer Bank Link([options])*

Create Customer Bank Link

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *customerId*

Current Id

### *bankCode*

Bank Code

### *bankAccountNumber*

Bank Account Number

### *status*

Status

### *createdBy*

Created By

## fcmb.Wallets.Transaction.BankLink(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Transaction.BankLink({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        customerId: "Customer Id || jedkhm10099189",
        bankCode: "Bank Code || 9189",
        bankAccountNumber: "Bank Account Numnber || 3010099189",
        status: "Status || true",
        createdBy: "Created By|| Oladele O. Jibowu"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

##  *Wallet Data Plan([options])*

Get Data Plan

### options

The module accepts options as objects of key-value.

## optional params

Optional Query Params

Phone Number

## fcmb.Wallets.Transaction.Dataplan(credentials)

In additions to the credentials stated above a params key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Transaction.Dataplan({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    params: {
        phoneNumber: "Phone Number || 09087641970"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Wallet Airtime Topup([options])*

Airtime Top-Up

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *amount*

Amount

### *requestId*

Request Id

### *network*

Network

### *paymentId*

Payment Id

### *paymentMode*

Payment Mode

### *channel*

Channel

### *sourceAccount*

Source Account

### *destinationPhone*

Destination Phone Number

## optonal payload

Optional Request Body

### *schemeCode*

Scheme Code

### *msisdn*

## fcmb.Wallets.Transaction.Airtime(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Transaction.Airtime({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        amount: "Amount || 200",
        requestId: "Request Id || jedkhm10099189",
        network: "Network || Etisalat",
        paymentId: "Payment Id || jedkhm10099189nwfjkh",
        paymentMode: "Payment Mode || ATM",
        channel: "Channel || 2",
        sourceAccount: "Source Account|| 3734303013",
        destinationPhone: "destination Phone Number || 08100991892",
        schemeCode: "Scheme Code || jwefh00991892",
        msisdn: "Msisdn || "
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
___

#  *Wallet Data Topup([options])*

Data Top-Up

### options

The module accepts options as objects of key-value.

## payload

Request Body

### *paymentId*

Payment Id

### *requestId*

Request Id

### *channel*

Channel

### *paymentMode*

Payment Mode

### *sourceAccount89*

Source Account Number

### *destinationPhone*

Destination Phone Number

### *dataplan*

Data Plan

### *sourcePhone*

Source Phone Number

### *schemeCode*

Scheme Code

## fcmb.Wallets.Transaction.Data(credentials)

In additions to the credentials stated above a payload key with addition request credentials as object of key values should be added to the object. For example

```javascript
fcmb.Wallets.Transaction.Data({
    sandbox_key: "Your sandbox key",
    client_id: "Your x-ibm-client-id || f",
    accept: "application/json",
    "content-type": "application/json",
    payload: {
        paymentId: "Payment Id || jedkhm10099189nwfjkh",
        requestId: "Request Id || jedkhm10099189",
        channel: "Channel || 2",
        paymentMode: "Payment Mode || ATM",
        sourceAccount89: "Source Account|| 3734303013",
        destinationPhone: "destination Phone Number || 08100991892",
        dataplan: "Data Plan || 2000",
        sourcePhone: "Source Phone Number || 08100991892",
        schemeCode: "Scheme Code || jwefh00991892"
    },
    host: "Your host url || https://sandboxapi.fsi.ng"
}).then(res => {
    // do something
})
```
