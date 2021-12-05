//
// == Installation ==
//
// Install all the packages required to build this:
// (Packages will be installed in ./node_modules - don't accidentally commit this)
// % yarn install
//
// == Building ==
//
// % yarn run grunt
//
// Watch for changes:
// % yarn run grunt watch
//
//

module.exports = function (grunt) {
	'use strict';

	const sass = require('sass')

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: ['build'],

		sass: {
			options: {
				implementation: sass,
				outputStyle: 'compressed',
				sourceMap: true,
				includePaths: ['node_modules/'],
			},
			production: {
				files: {
					'build/main.min.css': 'assets/css/main.scss',
				}
			}
		},

		uglify: {
			dist: {
				options: {
					preserveComments: 'some',
					compress: false,
					sourceMap: 'build/main.min.js.map',
					sourceMappingURL: 'main.min.js.map',
					sourceMapRoot: '../',
				},
				files: {
					'build/main.min.js': [
						'assets/js/plugins/*.js',
						'node_modules/jquery-placeholder/jquery.placeholder.js',
						'node_modules/bowser/bowser.js',
						'node_modules/url-polyfill/url-polyfill.js',
						'node_modules/es6-promise/dist/es6-promise.auto.js',
						'node_modules/govuk-frontend/govuk/all.js',
						'assets/js/customizer.js',
						'assets/js/navigation.js'
					],
				},
			},
		},

		copy: {
			dist: {
				files: [
					{
						src: [
							'node_modules/govuk-frontend/govuk/assets/fonts/*',
							'node_modules/govuk-frontend/govuk/assets/images/*'
						],
						dest: 'build/',
					},
				],
			},
		},

		_watch: {
			css: {
				files: ['assets/css/**/*.scss'],
				tasks: ['sass'],
			},
			js: {
				files: ['assets/js/**/*.js'],
				tasks: ['uglify'],
			},
		},
	})

	grunt.loadNpmTasks('grunt-sass')
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-copy')
	grunt.loadNpmTasks('grunt-contrib-clean')

	grunt.renameTask('watch', '_watch')
	grunt.registerTask('watch', [
		'default',
		'_watch',
	])

	grunt.registerTask('default', [
		'clean',
		'copy',
		'sass',
		'uglify',
	])

}
