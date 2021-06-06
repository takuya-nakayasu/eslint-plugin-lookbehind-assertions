"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noLookbehindAssertionsRegexp = void 0;
function getRegexpPattern(node) {
    if (node.regex) {
        return node.regex.pattern;
    }
    if (typeof node.value === 'string' &&
        (node.parent.type === 'NewExpression' ||
            node.parent.type === 'CallExpression') &&
        node.parent.callee.type === 'Identifier' &&
        node.parent.callee.name === 'RegExp' &&
        node.parent.arguments[0] === node) {
        return node.value;
    }
    return undefined;
}
exports.noLookbehindAssertionsRegexp = {
    meta: {
        type: 'problem',
        docs: {
            category: 'Possible Errors',
            description: 'disallow the use of regexp lookbehind assertions((?<= ) and (?<! ))',
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
                var pattern = getRegexpPattern(node);
                if (pattern) {
                    console.dir(node);
                }
            },
        };
    },
};
module.exports = exports.noLookbehindAssertionsRegexp;
