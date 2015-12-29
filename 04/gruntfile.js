module.exports = function(grunt) {
	grunt.initConfig({
	
		concat: {
			dist: {
				src: ['components/scripts/*.js'],
				dest: 'builds/development/js/scripts.js'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');

};