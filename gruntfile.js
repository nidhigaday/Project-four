module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '*/css',
          src: ['*.css', '!*.min.css'],
          dest: 'Project-four/css',
          ext: '.min.css'
        }]
      }
    },

    imagemin: {
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'img/',                   // Src matches are relative to this path
          src: ['*.{png,jpg,gif}'],      // Actual patterns to match
          dest: 'img/'                   // Destination path prefix
        }]
      }
    },

    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'index-minify.html': 'Src/index.html',     // 'destination': 'source'
          //'dist/contact.html': 'src/contact.html'
        }
      }
    },

    critical: {
      test: {
        options: {
            base: './',
            css: [
                'css/style.css',
                'css/media.css'
            ],
            width: 320,
            height: 70
        },
        src: 'index-minify.html',
        dest: 'index.html'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-critical');

  grunt.registerTasks('default', ['cssmin', 'imagemin', 'htmlmin', 'critical']);
};