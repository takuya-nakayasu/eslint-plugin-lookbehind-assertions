import { TSESLint } from '@typescript-eslint/experimental-utils';

function getRegexpPattern(node: any): string | undefined {
  if (node.regex) {
    return node.regex.pattern;
  }
  if (typeof node.value === 'string') {
    return node.value;
  }
  return undefined;
}

function isLookbehindAssertions(pattern: string): boolean {
  const positiveLookbehindAssertions = new RegExp('\\(\\?<=.+');
  const negativeLookbehindAssertions = new RegExp('\\(\\?<!.+');
  return (
    positiveLookbehindAssertions.test(pattern) ||
    negativeLookbehindAssertions.test(pattern)
  );
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
        'disallow the use of lookbehind assertions((?<= ) and (?<! )) in regular expressions',
      recommended: 'error',
      url: '',
    },
    messages: {
      noLookbehindAssertionsRegexp:
        'Unexpected lookbehind assertions((?<= ) and (?<! )) in regular expression: {{pattern}}.',
    },
    schema: [],
    fixable: 'code',
  },
  create: (context) => {
    return {
      Literal(node) {
        const pattern = getRegexpPattern(node);
        if (pattern) {
          if (isLookbehindAssertions(pattern)) {
            context.report({
              node,
              messageId: 'noLookbehindAssertionsRegexp',
              data: {
                pattern,
              },
            });
          }
        }
      },
    };
  },
};

module.exports = noLookbehindAssertionsRegexp;
export default noLookbehindAssertionsRegexp;
