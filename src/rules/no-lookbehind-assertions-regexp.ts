import { TSESLint } from '@typescript-eslint/experimental-utils';

export const lookbehindAssertions: TSESLint.RuleModule<
  'lookbehindAssertions',
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
      lookbehindAssertions: 'Remove',
    },
    schema: [],
    fixable: 'code',
  },
  create: (context) => {
    return {
      JSXElement(node) {
        console.dir(node);
      },
    };
  },
};
