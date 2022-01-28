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
import rule from "./bar.rule";

rule.execute();
```

## Options

|                Name                 |        Type         |                   Default                    | Description                                                |
| :---------------------------------: | :-----------------: | :------------------------------------------: | :--------------------------------------------------------- |
|      **`checkSchema`**              |    `{Boolean}`      |                    `true`                    | Enables/disables the validation scheme for the rule files  |
|      **`runtimeModule`**            |    `{String}`       |         `'@ruleenginejs/runtime'`            | Runtime module name                                        |
|     **`moduleBaseDir`**             |    `{String}`       |                  `undefined`                 | Base path for import modules in rule files                 |
|     **`esModule`**                  |    `{Boolean}`      |                    `true`                    | Enable/disable ES modules syntax                           |

## License

Licensed under the [MIT License](./LICENSE).
