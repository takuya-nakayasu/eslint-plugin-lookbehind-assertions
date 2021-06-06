import { TSESLint } from '@typescript-eslint/experimental-utils';

export const noLookbehindAssertionsRegexp: TSESLint.RuleModule<
  'noLookbehindAssertionsRegexp',
  []
> = {
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
  create: (context) => {
    return {
      Literal(node) {
        console.dir(node);
      },
    };
  },
};

module.exports = noLookbehindAssertionsRegexp;
