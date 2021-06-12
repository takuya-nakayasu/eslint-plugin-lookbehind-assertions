import noLookbehindAssertionsRegexp from './rules/no-lookbehind-assertions-regexp';
export = {
  rules: {
    'no-lookbehind-assertions-regexp': noLookbehindAssertionsRegexp,
  },
  configs: {
    all: {
      plugins: ['lookbehind-assertions'],
      rules: {
        'no-lookbehind-assertions-regexp': 'error',
      },
    },
    recommended: {
      plugins: ['lookbehind-assertions'],
      rules: {
        'no-lookbehind-assertions-regexp': 'error',
      },
    },
  },
};
