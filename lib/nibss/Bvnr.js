const request = require('./common/Request');

exports.Reset = async(data) => {
    try {
        return await request.trigger({
            method: 'POST',
            path: '/nibss/bvnr/Reset',
            credentials: { ...data },
        });
    } catch (error) {
        return error;
    }
};


exports.VerifySingleBVN = async(data) => {
    try {
        const payload = { BVN: data.bvn };
        return await request.trigger({
            method: 'POST',
            path: '/nibss/bvnr/VerifySingleBVN',
            credentials: { ...data },
            payload,
        });
    } catch (error) {
        return error;
    }
};


exports.VerifyMultipleBVN = async(data) => {
    try {
        const payload = { BVNS: data.bvn };
        return await request.trigger({
            method: 'POST',
            path: '/nibss/bvnr/VerifyMultipleBVN',
            credentials: { ...data },
            payload,
        });
    } catch (error) {
        return error;
    }
};


exports.GetSingleBVN = async(data) => {
    try {
        const payload = { BVN: data.bvn };
        return await request.trigger({
            method: 'POST',
            path: '/nibss/bvnr/GetSingleBVN',
            credentials: { ...data },
            payload,
        });
    } catch (error) {
        throw new Error('Error Getting BVN.');
    }
};

exports.GetMultipleBVN = async(data) => {
    try {
        const payload = { BVNS: data.bvn };
        return await request.trigger({
            method: 'POST',
            path: '/nibss/bvnr/GetMultipleBVN',
            credentials: { ...data },
            payload,
        });
    } catch (error) {
        throw new Error('Error Getting BVN.');
    }
};

exports.IsBVNWatchlisted = async(data) => {
    try {
        const payload = { BVN: data.bvn };
        return await request.trigger({
            method: 'POST',
            path: '/nibss/bvnr/IsBVNWatchlisted',
            credentials: { ...data },
            payload,
        });
    } catch (error) {
        return error;
    }
};
