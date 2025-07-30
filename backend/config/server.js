"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (_a) {
    var env = _a.env;
    return ({
        host: env('HOST', '0.0.0.0'),
        port: env.int('PORT', 1337),
        app: {
            keys: env.array('APP_KEYS'),
        },
    });
});
