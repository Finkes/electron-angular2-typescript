'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false
        },
        src: ['bin/test/**/*.js']
      }
    }
  });
  
  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-mocha-test');
  
  grunt.registerTask('typescript', 'compile app and tests', function() {
    var done = this.async();
    
    grunt.util.spawn({
      grunt: false,
      cmd: "tsc",
      args: ["-p", ".", "-sourcemap"],
      opts: {
        stdio: "inherit"
      }
    }, function(err, result, stderr) {
      grunt.log.ok('successfully transpiled typescript!');
      done();
    });
  });
  
  // Task aliases
  grunt.registerTask('test', ['typescript', 'mochaTest']);
  
  // Default task
  grunt.registerTask('default', ['test']);
    grunt.registerTask('build', ['typescript']);
};