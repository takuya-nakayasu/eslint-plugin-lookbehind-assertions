"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var no_lookbehind_assertions_regexp_1 = __importDefault(require("./rules/no-lookbehind-assertions-regexp"));
module.exports = {
    rules: {
        'no-lookbehind-assertions-regexp': no_lookbehind_assertions_regexp_1.default,
    },
    configs: {
        all: {
            plugins: ['lookbehind-assertions'],
            rules: {
                'no-lookbehind-assertions-regexp': 'error',
            },
        },
        recommended: {
            plugins: ['lookbehind-assertions'],
            rules: {
                'no-lookbehind-assertions-regexp': 'error',
            },
        },
    },
};
