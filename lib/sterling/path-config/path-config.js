const PATH_CONFIG = Object.freeze({
    INTERBANK_TRANSFER_REQ_PATH: '/sterling/accountapi/api/Spay/InterbankTransferReq',
    MOBILE_WALLET_REQUEST_PATH: '/sterling/accountapi/api/Spay/SBPMWalletRequest',
    BILL_PAYMENT_ADVICE_REQUEST_PATH: '/sterling/billpaymentapi/api/Spay/BillPaymtAdviceRequestISW',
    BILLER_PAYMENT_ITEMS_REQUEST_PATH: '/sterling/billpaymentapi/api/Spay/GetBillerPmtItemsRequest',
    BILLER_ISW_REQUEST_PATH: '/sterling/billpaymentapi/api/Spay/GetBillersISWRequest',
});
module.exports = PATH_CONFIG;
