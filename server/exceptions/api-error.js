module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status, message ,errors = []) {
        super(message);
        this.status = status ;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'User has been not auth...')
    }

    static BadRequest (message, error = []) {
        return new ApiError(400, message, error)
    }
}