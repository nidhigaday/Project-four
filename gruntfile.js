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
          dynamic: {                             // Another target
              files: [{
                  expand: true,                  // Enable dynamic expansion
                  cwd: 'img/',                   // Src matches are relative to this path
                  src: ['*.{png,jpg,gif}'],      // Actual patterns to match
                  dest: 'img/'                   // Destination path prefix
              }]
          }
      },

      htmlmin: {                                       // Task
          dist: {                                      // Target
              options: {                               // Target options
                  removeComments: true,
                  collapseWhitespace: true
              },
              files: {                                 // Dictionary of files
                  'minified/index.html': 'Src/index.html',     // 'destination': 'source'
                  'project-webperf.html': 'Src/project-webperf.html',
                  'education.html': 'Src/education.html'
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
                      width: 320,                       // viewport width and height
                      height: 70
              },
              files:{
                  'index.html': 'minified/index.html',
                  //'project-webperf.html': 'minified/project-webperf.html',
                  //'education.html': 'minified/education.html'
              }
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-critical');

  grunt.registerTask('default', ['cssmin', 'imagemin', 'htmlmin', 'critical']);
};