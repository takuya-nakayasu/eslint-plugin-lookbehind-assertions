import { TSESLint, TSESTree } from '@typescript-eslint/experimental-utils';

function getRegexpPattern(node: any): string | undefined {
  if (node.regex) {
    return node.regex.pattern;
  }
  if (
    typeof node.value === 'string' &&
    (node.parent.type === 'NewExpression' ||
      node.parent.type === 'CallExpression') &&
    node.parent.callee.type === 'Identifier' &&
    node.parent.callee.name === 'RegExp' &&
    node.parent.arguments[0] === node
  ) {
    return node.value;
  }
  return undefined;
}

export const noLookbehindAssertionsRegexp: TSESLint.RuleModule<
  'noLookbehindAssertionsRegexp',
  []
> = {
  meta: {
    type: 'problem',
    docs: {
      category: 'Possible Errors',
      description:
        'disallow the use of regexp lookbehind assertions((?<= ) and (?<! ))',
      recommended: 'error',
      url: '',
    },
    messages: {
      noLookbehindAssertionsRegexp: 'Remove',
    },
    schema: [],
    fixable: 'code',
  },
  create: (context) => {
    return {
      Literal(node) {
        const pattern = getRegexpPattern(node);
        if (pattern) {
          console.dir(node);
        }
      },
    };
  },
};

module.exports = noLookbehindAssertionsRegexp;
