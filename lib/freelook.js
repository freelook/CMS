#! /usr/bin/env node

/*
 * freelook
 * freelook.info
 *
 * Copyright (c) 2014 Dima Kostrub
 * Licensed under the MIT license.
 */

'use strict';

var grunt = require('grunt'),
    config = require('../ConfigService');

    config['data'] = 'ls';

grunt.tasks(['run']);

console.log(process.argv);

require('open')('http://freelook.info');

exports.run = function() {
    return 'run';
};