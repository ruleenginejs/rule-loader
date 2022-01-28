const schema = require('@ruleenginejs/schema');
const { generateCode } = require('@ruleenginejs/compiler');
const { validate } = require('schema-utils');
const schemaValidator = schema(schema.SCHEMAS.PIPELINE);
const defaultRuntimeModule = '@ruleenginejs/runtime';

const optionsSchema = {
  type: 'object',
  properties: {
    checkSchema: {
      type: 'boolean',
    },
    runtimeModule: {
      type: 'string',
    },
    moduleBaseDir: {
      type: 'string',
    },
    esModule: {
      type: 'boolean'
    }
  },
  additionalProperties: false
};

module.exports = function loader(source) {
  const options = this.getOptions() || {};

  validate(optionsSchema, options, {
    name: 'Rule Loader',
    baseDataPath: 'options',
  });

  const data = JSON.parse(source);

  if (options.checkSchema === undefined || options.checkSchema) {
    const isValid = schemaValidator(data);
    if (!isValid) {
      throw new Error(
        `Schema invalid: ${JSON.stringify(schemaValidator.errors)}`
      );
    }
  }

  const code = generateCode(data, {
    runtimeModule: options.runtimeModule || defaultRuntimeModule,
    esModule: options.esModule === undefined || options.esModule,
    baseDir: options.moduleBaseDir
  });

  return code;
};
