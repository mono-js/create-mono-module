# Create Mono Module

> Create a [Mono](https://github.com/terrajs/mono) module in seconds

## Usage

Make sure you have [npx](https://www.npmjs.com/package/npx) installed (`npx` is shipped by default since NPM `5.2.0`)

```
npx create-mono-module <my-mono-module>
```
Or with [yarn](https://yarnpkg.com/en/):

```
yarn create mono-module <my-mono-module>
```

## ESLint

The module has [ESLint](https://eslint.org) configured to let you linted  code from the start.

## Test

Your Mono module is ready to be tested with [AVA](https://github.com/avajs/ava), [nyc](https://github.com/istanbuljs/nyc) and [mono-test-utils](https://github.com/terrajs/mono-test-utils).

```bash
npm test
```

## License

MIT &copy; [terrajs](github.com/terrajs)
