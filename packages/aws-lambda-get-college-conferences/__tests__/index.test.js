'use strict';

const awsLambdaGetCollegeConferences = require('..');
const assert = require('assert').strict;

assert.strictEqual(awsLambdaGetCollegeConferences(), 'Hello from awsLambdaGetCollegeConferences');
console.info('awsLambdaGetCollegeConferences tests passed');
