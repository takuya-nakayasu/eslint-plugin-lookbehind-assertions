"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var experimental_utils_1 = require("@typescript-eslint/experimental-utils");
var no_lookbehind_assertions_regexp_1 = require("../../src/rules/no-lookbehind-assertions-regexp");
var tester = new experimental_utils_1.TSESLint.RuleTester();
tester.run('lookbehindAssertions', no_lookbehind_assertions_regexp_1.lookbehindAssertions, {
    valid: [{ code: 'const RE_AS_BS = /aa(?=bb)/' }],
    invalid: [
        {
            code: 'const RE_DOLLAR_PREFIX = /(?<=$)foo/g',
            errors: [{ messageId: 'lookbehindAssertions' }],
        },
    ],
});
