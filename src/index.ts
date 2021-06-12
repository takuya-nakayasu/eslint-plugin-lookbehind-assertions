import noLookbehindAssertionsRegexp from './rules/no-lookbehind-assertions-regexp';
export = {
  rules: {
    'no-lookbehind-assertions-regexp': noLookbehindAssertionsRegexp,
  },
  configs: {
    all: {
      plugins: ['no-lookbehind-assertions-regexp'],
      rules: {
        'no-lookbehind-assertions-regexp': 'error',
      },
    },
    recommended: {
      plugins: ['no-lookbehind-assertions-regexp'],
      rules: {
        'no-lookbehind-assertions-regexp': 'error',
      },
    },
  },
};
