var config = require('../ConfigService');

module.exports = function(grunt) {

    grunt.config.set('exec', {
        run: {
            command: 'grunt rundata:' + config['data'],
            stdout: true,
            stderr: true
        }
    });

    grunt.loadNpmTasks('grunt-exec');
};
