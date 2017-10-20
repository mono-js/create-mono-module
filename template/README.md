# <%= name %>

<%= description %>

[![npm version](https://img.shields.io/npm/v/<%= name %>.svg)](https://www.npmjs.com/package/<%= name %>)
[![Travis](https://img.shields.io/travis/<%= username %>/<%= name %>/master.svg)](https://travis-ci.org/<%= username %>/<%= name %>)
[![Coverage](https://img.shields.io/codecov/c/github/<%= username %>/<%= name %>/master.svg)](https://codecov.io/gh/<%= username %>/<%= name %>)
[![license](https://img.shields.io/github/license/<%= username %>/<%= name %>.svg)](https://github.com/<%= username %>/<%= name %>/blob/master/LICENSE)

## Installation

```bash
npm install --save <%= name %>
```

Then, in your configuration file of your Mono application (example: `conf/application.js`):

```js
module.exports = {
  mono: {
    modules: ['<%= name %>']
  }
}
```

## Configuration

`<%= name %>` will use the `mono.<%= moduleKey %>` property of your configuration (example: `conf/development.js`):

```js
module.exports = {
  mono: {
    <%= moduleKey %>: {
      /* Module options */
    }
  }
}
```

## Usage

In your `src/` files of your Mono project, you can access `hello` like this:

```js
const { hello } = require('<%= name %>')

hello()
```

## Development / Contribution

See the [contribution guidelines](CONTRIBUTING.md) of this project.

## License

MIT &copy; <%= username %>
