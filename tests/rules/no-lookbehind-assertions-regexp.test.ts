import { TSESLint } from '@typescript-eslint/experimental-utils';
import noLookbehindAssertionsRegexp from '../../src/rules/no-lookbehind-assertions-regexp';

const tester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

tester.run('noLookbehindAssertionsRegexp', noLookbehindAssertionsRegexp, {
  valid: [{ code: 'const RE_AS_BS = /aa(?=bb)/' }],
  invalid: [
    {
      code: 'const RE_DOLLAR_PREFIX = /(?<=$)foo/g',
      errors: [{ messageId: 'noLookbehindAssertionsRegexp' }],
    },
  ],
});
