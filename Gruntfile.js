module.exports = function exports(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		concurrent: {
			target: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true,
				},
			},
		},

		nodemon: {
			dev: {
				script: 'server.js',
				options: {
					ext: 'js,jade',
					delay: 1000,
					legacyWatch: true,
				},
			},
		},

		sass: {
			dist: {
				options: {
					style: 'compressed',
				},
				files: {
					'app/client/assets/css/compiled/app.css': 'app/client/assets/css/sass/app.scss',
				},
			},
		},

		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: [
					'app/client/assets/js/vendors/jquery-2.1.4.min.js',
					'app/client/assets/js/vendors/*.js',
					'app/client/app/**/*.js',
					'app/client/app/**/**/*.js',
				],
				dest: 'app/client/assets/js/app.js',
			},
		},

		uglify: {
			my_target: {
				options: {
					sequences: true,
					dead_code: true,
					conditionals: true,
					booleans: true,
					unused: false,
					if_return: true,
					join_vars: true,
					drop_console: true,
				},
				files: {
					'app/client/assets/js/build/app.min.js': ['app/client/assets/js/app.js'],
				},
			},
		},

		watch: {
			scripts: {
				files: ['app/client/assets/css/sass/**/*.scss', 'app/client/app/**/*.js'],
				tasks: ['sass', 'concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
		},
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['sass']);
	grunt.registerTask('listen', ['concurrent']);
};
