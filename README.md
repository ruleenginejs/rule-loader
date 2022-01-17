# @ruleenginejs/rule-loader

> Rule loader for webpack.

## Installation

```bash
npm install -D @ruleenginejs/rule-loader
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
import pipeline from "./my.rule";

pipeline.execute();
```

## License

Licensed under the [MIT License](./LICENSE).
