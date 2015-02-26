'use strict';

// Grunt task for compiling Facebook React's JSX templates into JavaScript
module.exports = {
  dev: {
    files: [
      {
        expand: true,
        cwd: '<%= yeoman.app %>/scripts/components/src',
        src: ['**/*.jsx'],
        dest: '<%= yeoman.app %>/scripts/components/build',
        ext: '.js'
      }
    ]
  }
};
