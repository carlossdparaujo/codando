'use strict';
import shelljs from "shelljs";

process.on('unhandledRejection', err => {
  throw err;
});

require('../config/env');

let command = [];
command.push('mocha');
command.push('\"src/**/*.spec.js\"');
command.push('--recursive');
command.push('--compilers');
command.push('js:babel-register');
command.push('--require');
command.push('ignore-styles');
command.push('--watch');
command.push('--colors');

shelljs.exec(command.join(" "));
