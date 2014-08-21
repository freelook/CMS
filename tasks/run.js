var config = require('../ConfigService');

module.exports = function(grunt) {

    var params = grunt.option('params');

    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('run', 'run freelook', function() {
        grunt.task.run('exec:run');
        console.log(process.argv);
        console.log(config['data']);
    });

    grunt.registerTask('rundata', 'run with freelook', function(data) {
        console.log(data);
    });

};
