const schema = require('@ruleenginejs/schema');
const { generateCode } = require('@ruleenginejs/compiler');

let schemaValidator = null;

module.exports = function loader(source) {
  const data = JSON.parse(source);

  if (!schemaValidator) {
    schemaValidator = schema(schema.SCHEMAS.PIPELINE);
  }

  const isValid = schemaValidator(data);
  if (!isValid) {
    throw new Error(
      `Schema invalid: ${JSON.stringify(schemaValidator.errors)}`
    );
  }

  const code = generateCode(data, {
    runtimeModule: '@ruleenginejs/runtime'
  });

  return code;
};
