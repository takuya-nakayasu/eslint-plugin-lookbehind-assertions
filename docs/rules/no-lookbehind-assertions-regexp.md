# disallow the use of lookbehind assertions((?<= ) and (?<! )) in regular expressions (`no-lookbehind-assertions-regexp`)

Regular expression lookbehind assertions are not supported by some browsers (such as Safari) and can cause unexpected errors.

## Rule Details

This rule disallows the use of regular expression lookbehind assertions.

## Examples

In the examples below, we will use the following configuration:

```json
"rules": {
  "lookbehind-assertions/no-lookbehind-assertions-regexp": "error"
}
```

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
