module.exports = function(grunt) {
	grunt.initConfig({
	
		concat: {
			options: {
				separator: "\n\n//------------------------------------------------------\n",
				banner: "\n\n//------------------------------------------------------\n"
			},
			dist: {
				src: ['components/scripts/*.js'],
				dest: 'builds/development/js/scripts.js'
			}
		}, 

		sass: {
			options: {
					outputStyle: 'expanded'
			},
			dist: {
				files: [{
					src: 'components/sass/style.scss',
					dest: 'builds/development/css/style.css'
				}]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['concat', 'sass']);

};