exports.config = {
  specs: [
    './test/functional/**/*.js',
  ],
  maxInstances: 10,
  capabilities: [{
    browserName: 'phantomjs',
  }],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  waitforTimeout: 10000,
  connectionRetryTimeout: 10000,
  connectionRetryCount: 3,
  services: ['phantomjs'],
  framework: 'mocha',
  mochaOpts: {
    timeout: 30000,
    compilers: ['js:babel-core/register'],
  },
  reporters: ['spec'],
};
