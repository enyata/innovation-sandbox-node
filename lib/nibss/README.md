# INNOVATION SANDBOX

## Install
```bash
$ npm install innovation-sandbox
```

## Require NIBSS Library
```javascript
const { nibss } = require('innovation-sandbox')
```

## RESET_TOKEN([0ptions])
This should be done on every initialization.

### Options
The module accepts options as objects of key-value and returns aes_key, ivkey and password .

#### sandbox_key
This can be found in the innovation sandbox dashboard after signup. However `0ae0db703c04119b3db7a03d7f854c13` can be used for testing purposes.

#### organisation_code
Credential is gotten from nibss. prior to acquiring this credential, 11111 should be used for testing rather documentation should say use organisation code from Dashboard.

##### host
This argument is optional in all cases. Defaults to `https://sandboxapi.fsi.ng` if not found.

### nibss.Bvnr.Reset(credentials)
Returns the aes_key, ivey and password. As earlier stated this function should be called at every initialization. The credentials returned is set as part of the data for accessing other nibss modules.

The following example calls the reset module
```javascript
nibss.Bvnr.Reset({sandbox_key:'Your sandbox_key', organisation_code: 'Your organisation_code'})
.then((response) => {
    //do something with the response here
})
```

Below is an example of a reset result:
```javascript
{
  password: "password",
  ivkey: 'Your ivykey',
  aes_key: 'Your aes_key'
}
```

## USING CREDENTIALS
Once the credentials from the reset module has been acquired it should be appended as an object alongside the organization_code, host and sandbox_key as part of the credentials to every request made to the nibss API.

### Verify Single BVN
Verifies single BVN

#### nibss.Bvnr.VerifySingleBVN(credentials)
In additions to the credentials stated above a 'bvn' key with the value of the bvn number to be verified as a string should be added to the object. For example

```javascript
nibss.Bvnr.VerifySingleBVN({
    bvn: 'BVN',
    sandbox_key: 'Your sandbox_key',
    organisation_code: 'Your organisation_code',
    password: 'Your password',
    ivkey: 'Your ivkey',
    aes_key: 'Your aes_key',
    host: 'Your host url'
}).then(res => {
    //do something
})
```

### Verify Multiple BVN
Verify multiple BVN

#### nibss.Bvnr.VerifyMultipleBVN(credentials)
Credentials are same as VerifySingleBVN. The BVN numbers are seperated by comma. For example

```javascript
nibss.Bvnr.VerifySingleBVN({
    bvn: 'BVN1, BVN2, ...BVNn',
    sandbox_key: 'Your sandbox_key',
    organisation_code: 'Your organisation_code',
    password: 'Your password',
    ivkey: 'Your ivkey',
    aes_key: 'Your aes_key',
    host: 'Your host url'
}).then(res => {
    //do something
})
```
Note: This module accepts a maximum of 10 BVNs as the bvn value.

### GET SINGLE BVN
Gets single BVN

#### nibss.Bvnr.GetSingleBVN(credentials)
Credentials are same as VerifySingleBVN. 

```javascript
nibss.Bvnr.GetSingleBVN({
    bvn: 'BVN',
    sandbox_key: 'Your sandbox_key',
    organisation_code: 'Your organisation_code',
    password: 'Your password',
    ivkey: 'Your ivkey',
    aes_key: 'Your aes_key',
    host: 'Your host url'
}).then(res => {
    //do something
})
```

### GET Multiple BVN
Get multiple BVN

#### nibss.Bvnr.GetMultipleBVN(credentials)
Credentials are same as VerifyMultipleBVN.

```javascript
nibss.Bvnr.VerifySingleBVN({
    bvn: 'BVN1, BVN2, ...BVNn',
    sandbox_key: 'Your sandbox_key',
    organisation_code: 'Your organisation_code',
    password: 'Your password',
    ivkey: 'Your ivkey',
    aes_key: 'Your aes_key',
    host: 'Your host url'
}).then(res => {
    //do something
})
```

### Is BVN Watchlisted
Verifys if BVN has been watch listed.

#### nibss.Bvnr.IsBVNWatchlisted(credentials)
Credentials are same as VerifySingleBVN.

```javascript
nibss.Bvnr.IsBVNWatchlisted({
    bvn: 'BVN',
    sandbox_key: 'Your sandbox_key',
    organisation_code: 'Your organisation_code',
    password: 'Your password',
    ivkey: 'Your ivkey',
    aes_key: 'Your aes_key',
    host: 'Your host url'
}).then(res => {
    //do something
})
```

### Verify Finger Print
Verify finger print

#### nibss.FingerPrint.VerifyFingerPrint(credentials)
Credentials are same as VerifySingleBVN. The 'bvn' key is replaced with 'fingerPrintData' key which is an object containing details about the finger print. Below are the keys required for the fingerPrintData object.

```json
fingerPrintData: {
    "BVN": "BVN",
    "DeviceId": "Your Device Number",
    "ReferenceNumber": "Your device reference number",
    "FingerImage": {
        "type": "image type",
        "position": "image position",
        "nist_impression_type": "impression type",
        "value": "impression value",
    }"
},
```

Below is an example on how to verify finger print

```javascript
nibss.Bvnr.VerifySingleBVN({
    fingerPrintData: {
                fingerPrintData: {
                BVN: '12345678901',
                DeviceId: 'Z000112BC12',
                ReferenceNumber: '00099201710012205354422',
                FingerImage: {
                    type: 'ISO_2005',
                    position: 'RT',
                    nist_impression_type: '0',
                    value: 'c2RzZnNkZnNzZGY=',
                }
            },
    sandbox_key: 'Your sandbox_key',
    organisation_code: 'Your organisation_code',
    password: 'Your password',
    ivkey: 'Your ivkey',
    aes_key: 'Your aes_key',
    host: 'Your host url'
}).then(res => {
    //do something
})
```

### Validate Single Record
Validates single record

#### nibss.PlaceHolder.ValidateRecord(credentials)
Credentials are same as VerifySingleBVN. The 'bvn' key is replaced with 'Record' key which is an object containing details about the BVN record.

```javascript
nibss.PlaceHolder.ValidateRecords({
    Record: {
                BVN: 'BVN',
                FirstName: 'Owner First Name',
                LastName: 'Owner Last name',
                MiddleName: 'Owner Middle Name',
                AccountNumber: 'Owner Account Number',
                BankCode: 'Bank Code',
            },
    sandbox_key: 'Your sandbox_key',
    organisation_code: 'Your organisation_code',
    password: 'Your password',
    ivkey: 'Your ivkey',
    aes_key: 'Your aes_key',
    host: 'Your host url'
}).then(res => {
    //do something
})
```

### Validate Multiple Records
validates multiple records

#### nibss.PlaceHolder.ValidateRecords(credentials)
Credentials are same as VerifySingleBVN. The 'bvn' key is replaced with 'Records' key which is an array of objects containing details about the BVN record.

```javascript
nibss.PlaceHolder.ValidateRecords({
    Records: [
                {
                    BVN: 'BVN1',
                    FirstName: 'Owner1 First Name',
                    LastName: 'Owner1 Last name',
                    MiddleName: 'Owner1 Middle Name',
                    AccountNumber: 'Owner1 Account Number',
                    BankCode: 'Bank Code',
                },
                {
                    BVN: 'BVN2',
                    FirstName: 'Owner2 First Name',
                    LastName: 'Owner2 Last name',
                    MiddleName: 'Owner2 Middle Name',
                    AccountNumber: 'Owner2 Account Number',
                    BankCode: 'Bank Code',
                },
            ],
    sandbox_key: 'Your sandbox_key',
    organisation_code: 'Your organisation_code',
    password: 'Your password',
    ivkey: 'Your ivkey',
    aes_key: 'Your aes_key',
    host: 'Your host url'
}).then(res => {
    //do something
})
```

## RUNNING TEST
After installing dependeinces, run the command 
```bash
$ npm test
```
