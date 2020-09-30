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