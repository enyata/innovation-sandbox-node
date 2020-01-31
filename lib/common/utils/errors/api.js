class ApiErrors extends Error {
    constructor(options) {
        super(options.message);
        this.name = this.constructor.name;
        this.message = options.message;
        this.status = options.statusCode;
    }
}

module.exports = ApiErrors;
