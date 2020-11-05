const request = require('./common/request');


exports.generateToken = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-eco-api/xpress/token',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.nameInquiry = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-eco-api/accout/nameInquiry',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.fetchAccountBalance = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-eco-api/account/balance',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.transferFund = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-eco-api/transfer',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.checkTransactionStatus = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-eco-api/transaction/status',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.agentNameInquiry = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-unified-api/mock/rt/agent/nameInquiry',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.initiateReceiveCash = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-unified-api/mock/rt/agent/initiateReceiveCash',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.completeReceiveForAgent = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-unified-api/mock/rt/agent/completeReceive',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.agentTransactionStatus = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-unified-api/mock/rt/agent/transactionStatus',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.internationalNameInquiry = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-international-remittance/international/nameInquiry',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.postTransfer = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-international-remittance/international/postTransfer',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.fetchFeesAndRate = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-international-remittance/international/fetchRateFees',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.fetchInstitutionList = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-international-remittance/international/fetchInstitutionsList',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.internationalTransactionStatus = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-international-remittance/international/transactionStatus',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};

exports.fetchRate = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/ecobank/enterpriseIntegration/e-international-remittance/international/fetchRate',
            credentials: { ...data },
            payload: data.payload,
        });
    } catch (error) {
        return error;
    }
};
