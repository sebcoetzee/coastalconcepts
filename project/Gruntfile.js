module.exports = function(grunt) {

	grunt.initConfig(
		{
			exec: {
				jadeProd: "node node_modules/.bin/jade src/public --out build --hierarchy",
				jadeDev: "node node_modules/.bin/jade src/public --out build --hierarchy --pretty"
			},
			less: {
				dev: {
					files: {
						"build/css/style.css": "src/less/style.less"
					}
				}
			},
			uglify: {
				prod: {
					options: {
						sourceMap: false
					},
					files: {
						'build/js/app.js': ['build/bower_components/jquery/dist/jquery.min.js', 'build/bower_components/bootstrap/dist/js/bootstrap.min.js', 'build/bower_components/jquery.easing/jquery.easing.min.js', 'build/bower_components/jquery-migrate/jquery-migrate.min.js', 'build/bower_components/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js', 'build/bower_components/jquery-placeholder/jquery.placeholder.min.js', 'build/bower_components/jquery-sticky/jquery.sticky.js', 'build/bower_components/flexslider/jquery.flexslider-min.js', 'build/bower_components/mixitup/src/jquery.mixitup.js', 'build/bower_components/parallax/deploy/jquery.parallax.min.js', 'build/bower_components/wow/dist/wow.min.js', 'src/js/analytics.js', 'src/tsCompiled/*.js', 'build/js/app.js']
					}
				}
			},
			concat: {
				build_js: {
					src: ['build/bower_components/jquery/dist/jquery.min.js', 'build/bower_components/bootstrap/dist/js/bootstrap.min.js', 'build/bower_components/jquery.easing/jquery.easing.min.js', 'build/bower_components/jquery-migrate/jquery-migrate.min.js', 'build/bower_components/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js', 'build/bower_components/jquery-placeholder/jquery.placeholder.min.js', 'build/bower_components/jquery-sticky/jquery.sticky.js', 'build/bower_components/flexslider/jquery.flexslider-min.js', 'build/bower_components/mixitup/src/jquery.mixitup.js', 'build/bower_components/parallax/deploy/jquery.parallax.min.js', 'build/bower_components/wow/dist/wow.min.js', 'src/js/analytics.js', 'src/tsCompiled/*.js', 'build/js/app.js'],
					dest: 'build/js/app.js'
				},
				build_css: {
					src: ['build/bower_components/bootstrap/dist/css/bootstrap.min.css', 'build/bower_components/Ionicons/css/ionicons.min.css', 'build/bower_components/flexslider/flexslider.css', 'build/bower_components/animate.css/animate.min.css', 'build/css/style.css'],
					dest: 'build/css/style.css'
				}
			},
			ts: {
				build: {
					files: [
						{
							src: ['src/ts/**/*.ts'],
							dest: 'src/tsCompiled'
						}
					]
				}
			},
			clean: {
				build: ['src/tsCompiled']
			},
			copy: {
				html: {
					expand: true,
					cwd: 'src/html/',
					src: '**',
					dest: 'build/',
					flatten: true,
					filter: 'isFile'
				},
				ionicons: {
					expand: true,
					cwd: 'build/bower_components/Ionicons/fonts/',
					src: '**',
					dest: 'build/fonts/',
					filter: 'isFile'
				}
			},
			cssmin: {
				options: {
					keepSpecialComments: 0
				},
				build: {
					files: {
						'build/css/style.css': ['build/bower_components/bootstrap/dist/css/bootstrap.min.css', 'build/bower_components/Ionicons/css/ionicons.min.css', 'build/bower_components/flexslider/flexslider.css', 'build/bower_components/animate.css/animate.min.css', 'build/css/style.css']
					}
				}
			}
		}
	);

	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['less', 'exec:jadeProd', 'ts:build', 'uglify:prod', 'copy:html', 'copy:ionicons', 'cssmin', 'clean']);
	grunt.registerTask('dev', ['less', 'exec:jadeDev', 'ts:build', 'concat:build_js', 'concat', 'copy:html', 'copy:ionicons',]);

};
