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
			},
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
			},
		},

		wiredep: {
			task: {
				src: 'builds/development/**/*.html'
			}
		},

		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3000,
					base: 'builds/development/',
					livereload: true
				}
			}
		},

		watch: {
			options: {
				spawn: false,
				livereload: true,
			},
			scripts: {
				files: [
					'builds/development/**/*.html',
					'components/scripts/**/*.js',
					'components/sass/**/*.scss',
				],
				tasks: ['concat', 'sass'],
			},
		},

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-wiredep'); 

	grunt.registerTask('default', ['wiredep', 'concat', 'sass', 'connect', 'watch']);

};