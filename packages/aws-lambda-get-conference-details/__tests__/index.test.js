'use strict';

const awsLambdaGetConferenceDetails = require('..');
const assert = require('assert').strict;

assert.strictEqual(awsLambdaGetConferenceDetails(), 'Hello from awsLambdaGetConferenceDetails');
console.info('awsLambdaGetConferenceDetails tests passed');
