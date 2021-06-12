"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noLookbehindAssertionsRegexp = void 0;
function getStringValue(node) {
    if (node.regex) {
        return node.regex.pattern;
    }
    if (typeof node.value === 'string') {
        return node.value;
    }
    return undefined;
}
function isLookbehindAssertions(pattern) {
    var positiveLookbehindAssertions = new RegExp('\\(\\?<=.+');
    var negativeLookbehindAssertions = new RegExp('\\(\\?<!.+');
    return (positiveLookbehindAssertions.test(pattern) ||
        negativeLookbehindAssertions.test(pattern));
}
exports.noLookbehindAssertionsRegexp = {
    meta: {
        type: 'problem',
        docs: {
            category: 'Possible Errors',
            description: 'disallow the use of lookbehind assertions((?<= ) and (?<! )) in regular expressions',
            recommended: 'error',
            url: '',
        },
        messages: {
            noLookbehindAssertionsRegexp: 'Unexpected lookbehind assertions((?<= ) and (?<! )) in regular expression: {{stringValue}}.',
        },
        schema: [],
    },
    create: function (context) {
        return {
            Literal: function (node) {
                var stringValue = getStringValue(node);
                if (stringValue) {
                    if (isLookbehindAssertions(stringValue)) {
                        context.report({
                            node: node,
                            messageId: 'noLookbehindAssertionsRegexp',
                            data: {
                                stringValue: stringValue,
                            },
                        });
                    }
                }
            },
        };
    },
};
module.exports = exports.noLookbehindAssertionsRegexp;
exports.default = exports.noLookbehindAssertionsRegexp;
