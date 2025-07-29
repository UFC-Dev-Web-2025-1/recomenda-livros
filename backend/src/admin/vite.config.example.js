"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
exports.default = (function (config) {
    // Important: always return the modified config
    return (0, vite_1.mergeConfig)(config, {
        resolve: {
            alias: {
                '@': '/src',
            },
        },
    });
});
