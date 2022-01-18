# @ruleenginejs/rule-loader

> Rule loader for webpack.

## Installation

```bash
npm install -D @ruleenginejs/rule-loader
```

### Add Runtime

```bash
npm install @ruleenginejs/runtime
```

## Usage

### Config

#### webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.rule$/,
        use: '@ruleenginejs/rule-loader'
      }
    ]
  }
};
```

#### App.js

```js
import bar from "./bar.rule";

bar.execute();
```

## License

Licensed under the [MIT License](./LICENSE).
