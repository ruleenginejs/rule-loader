const path = require('path');
const webpack = require('webpack');
const { createFsFromVolume, Volume } = require('memfs');

module.exports = (fixture, options = {}) => {
  const compiler = webpack({
    mode: 'development',
    context: __dirname,
    entry: `./fixtures/${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js'
    },
    externals: {
      '@ruleenginejs/runtime': 'RuleengineJsRuntime'
    },
    module: {
      rules: [
        {
          test: /\.rule$/,
          use: {
            loader: path.resolve(__dirname, '../index.js'),
            options
          }
        }
      ]
    }
  });

  compiler.outputFileSystem = createFsFromVolume(new Volume());
  compiler.outputFileSystem.join = path.join.bind(path);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      if (stats.hasErrors()) reject(stats.toJson().errors);

      resolve(stats);
    });
  });
};
