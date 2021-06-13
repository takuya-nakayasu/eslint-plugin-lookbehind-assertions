# eslint-plugin-lookbehind-assertions

An ESLint plugin that disallows the use of regular expression lookbehind assertions.

[![npm version](https://img.shields.io/npm/v/eslint-plugin-lookbehind-assertions.svg)](https://www.npmjs.com/package/eslint-plugin-lookbehind-assertions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Twitter](https://img.shields.io/twitter/follow/l08084?style=social)](https://twitter.com/l08084)

## Installation

```
npm install --save-dev eslint-plugin-lookbehind-assertions
```

Or

```
yarn add --dev eslint-plugin-lookbehind-assertions
```

## Usage

Modify your `.eslintrc`

```js
// .eslintrc.json
module.exports = {
  "plugins": [
    ...,
    "lookbehind-assertions"
  ],
  "rules": [
    ...,
    "lookbehind-assertions/no-lookbehind-assertions-regexp": "error"
  ]
  ...,
}
```

## Rules

| Rule ID                                                                            | Description                                                   |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [no-lookbehind-assertions-regexp](./docs/rules/no-lookbehind-assertions-regexp.md) | Disallows the use of regular expression lookbehind assertions |

## Examples

Examples of **incorrect** code:

```ts
let re = /(?<=ripe )orange/;
re = new RegExp('(?<=ripe )orange');
```

Examples of **correct** code:

```ts
let re = /\d+(?=%)/;
re = new RegExp('d+(?=%)');
```

## License

MIT
