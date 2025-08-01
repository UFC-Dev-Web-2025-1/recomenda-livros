"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (_a) {
    var env = _a.env;
    return ({
        auth: {
            secret: env('ADMIN_JWT_SECRET'),
        },
        apiToken: {
            salt: env('API_TOKEN_SALT'),
        },
        transfer: {
            token: {
                salt: env('TRANSFER_TOKEN_SALT'),
            },
        },
        secrets: {
            encryptionKey: env('ENCRYPTION_KEY'),
        },
        flags: {
            nps: env.bool('FLAG_NPS', true),
            promoteEE: env.bool('FLAG_PROMOTE_EE', true),
        },
    });
});