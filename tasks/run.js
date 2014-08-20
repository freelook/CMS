module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('run', 'run freelook', function() {
        grunt.task.run('exec:run');
    });

};
