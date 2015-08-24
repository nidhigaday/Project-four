module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.initConfig({
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'Project-four/css',
					src: ['*.css', '!*.min.css'],
					dest: 'Project-four/css',
					ext: '.min.css'
				}]
			}
		}
	});

	grunt.registerTask('default', ['cssmin'])
}