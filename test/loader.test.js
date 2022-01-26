const compiler = require('./compiler.js');

describe('rule-loader', () => {
  it('should output compiled rule module', async () => {
    const stats = await compiler('simple.rule');
    const output = stats.toJson({ source: true }).modules[0].source;
    expect(output).toMatchSnapshot();
  });

  it('should throw error when invalid rule schema', async () => {
    expect.assertions(1);
    let message = null;
    try {
      await compiler('bad-schema.rule');
    } catch (e) {
      message = e[0].message.split("\n")[1];
    }
    expect(message).toMatchSnapshot();
  });
});
