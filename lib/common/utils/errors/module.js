class ModuleError extends Error {
    constructor(options) {
        super(options.message);
        this.name = this.constructor.name;
        this.message = options.message;
        this.error = options.error;
    }
}

module.exports = ModuleError;
