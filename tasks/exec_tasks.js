
module.exports = function (grunt) {
    
    grunt.config.set('exec', {
        run: {
            command: 'lineman',
            stdout: true,
            stderr: true
        }
    });
      
    grunt.loadNpmTasks('grunt-exec');
};
