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
    },
    copy: {
      client: {
        files: [
          {
            expand: true,
            flatten: true,
            src: './src/client/static/*',
            dest: './app/'
          }
        ]
      }
    }
  });
  
  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.registerTask('typescript-server', 'compile app and tests', function() {
    var done = this.async();
    
    grunt.util.spawn({
      grunt: false,
      cmd: "tsc",
      args: ["-p", "./src/server", "-sourcemap"],
      opts: {
        stdio: "inherit"
      }
    }, function(err, result, stderr) {
      grunt.log.ok('successfully transpiled typescript (server)!');
      done();
    });
  });
  
  grunt.registerTask('typescript-client', 'compile app and tests', function() {
    var done = this.async();
    
    grunt.util.spawn({
      grunt: false,
      cmd: "tsc",
      args: ["-p", "./src/client", "-sourcemap"],
      opts: {
        stdio: "inherit"
      }
    }, function(err, result, stderr) {
      grunt.log.ok('successfully transpiled typescript (client)!');
      done();
    });
  });
  
  // Task aliases
  grunt.registerTask('test', ['typescript', 'mochaTest']);
  
  // Default task
  grunt.registerTask('default', ['test']);
  grunt.registerTask('build', ['copy:client', 'typescript-server', 'typescript-client']);
};