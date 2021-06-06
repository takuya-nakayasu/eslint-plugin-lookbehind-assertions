"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noLookbehindAssertionsRegexp = void 0;
exports.noLookbehindAssertionsRegexp = {
    meta: {
        type: 'problem',
        docs: {
            category: 'Possible Errors',
            description: 'Check',
            recommended: 'error',
            url: '',
        },
        messages: {
            noLookbehindAssertionsRegexp: 'Remove',
        },
        schema: [],
        fixable: 'code',
    },
    create: function (context) {
        return {
            Literal: function (node) {
                console.dir(node);
            },
        };
    },
};
module.exports = exports.noLookbehindAssertionsRegexp;
