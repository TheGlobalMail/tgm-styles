'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['tgm-main.scss'],
          dest: './dist',
          ext: '.css'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('test', ['sass']);

};
