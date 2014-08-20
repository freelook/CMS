#! /usr/bin/env node

/*
 * freelook
 * freelook.info
 *
 * Copyright (c) 2014 Dima Kostrub
 * Licensed under the MIT license.
 */

'use strict';

var grunt = require('grunt');

exports.run = function() {
    return 'run';
};

grunt.tasks(['run']);
console.log(process.argv);