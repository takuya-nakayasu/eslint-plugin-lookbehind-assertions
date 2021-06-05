import { TSESLint } from '@typescript-eslint/experimental-utils';
import { lookbehindAssertions } from '../../src/rules/no-lookbehind-assertions-regexp';

const tester = new TSESLint.RuleTester({
  parser: '@typescript-eslint/parser',
});

tester.run('lookbehindAssertions', lookbehindAssertions, {
  valid: [{ code: 'const RE_AS_BS = /aa(?=bb)/' }],
  invalid: [
    {
      code: 'const RE_DOLLAR_PREFIX = /(?<=$)foo/g',
      errors: [{ messageId: 'lookbehindAssertions' }],
    },
  ],
});
