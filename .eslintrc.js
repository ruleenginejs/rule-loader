module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:node/recommended"
  ],
  env: {
    node: true
  },
  rules: {
    eqeqeq: [
      "error",
      "always"
    ],
    "node/exports-style": [
      "error",
      "module.exports"
    ],
    "node/file-extension-in-import": [
      "error",
      "always"
    ],
    "node/prefer-global/buffer": [
      "error",
      "always"
    ],
    "node/prefer-global/console": [
      "error",
      "always"
    ],
    "node/prefer-global/process": [
      "error",
      "always"
    ]
  }
}
