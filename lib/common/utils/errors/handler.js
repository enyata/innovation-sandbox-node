exports.Api = (statusCode) => {
    switch (statusCode) {
            case 400: {
                return { message: 'Bad request', statusCode };
            }
            case 401: {
                return { message: 'Unauthorized. Please check your credentials.', statusCode };
            }
            case 403: {
                return { message: 'Expired/Invalid Sanbox Key.', statusCode };
            }
            case 503: {
                return { message: 'Service temporarily unavailable', statusCode };
            }
            default: {
                return { message: 'Error executing methodName, Please raise an issue on Github.', statusCode: 500 };
            }
    }
};

exports.Module = (error) => ({
    message: 'Something went wrong, Please raise an issue on Github using the stack trace',
    error,
});
