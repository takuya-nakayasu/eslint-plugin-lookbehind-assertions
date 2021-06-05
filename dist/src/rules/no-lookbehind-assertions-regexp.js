"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookbehindAssertions = void 0;
exports.lookbehindAssertions = {
    meta: {
        type: 'problem',
        docs: {
            category: 'Possible Errors',
            description: 'Check',
            recommended: 'error',
            url: '',
        },
        messages: {
            lookbehindAssertions: 'Remove',
        },
        schema: [],
        fixable: 'code',
    },
    create: function (context) {
        return {
            Identifier: function (node) {
                console.dir(node);
            },
        };
    },
};
