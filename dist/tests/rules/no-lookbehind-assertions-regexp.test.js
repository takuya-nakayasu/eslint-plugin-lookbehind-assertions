"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var experimental_utils_1 = require("@typescript-eslint/experimental-utils");
var no_lookbehind_assertions_regexp_1 = __importDefault(require("../../src/rules/no-lookbehind-assertions-regexp"));
var tester = new experimental_utils_1.TSESLint.RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
});
tester.run('noLookbehindAssertionsRegexp', no_lookbehind_assertions_regexp_1.default, {
    valid: [{ code: 'const RE_AS_BS = /aa(?=bb)/' }],
    invalid: [
        {
            code: 'const RE_DOLLAR_PREFIX = /(?<=$)foo/g',
            errors: [{ messageId: 'noLookbehindAssertionsRegexp' }],
        },
    ],
});
