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
						'build/js/app.js': ['build/js/app.js']
					}
				}
			},
			concat: {
				build: {
					src: ['src/js/app.js', 'src/tsCompiled/*.js'],
					dest: 'build/js/app.js'
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
			copy: {
				html: {
					expand: true,
					cwd: 'src/html/',
					src: '**',
					dest: 'build/',
					flatten: true,
					filter: 'isFile'
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

	grunt.registerTask('default', ['less', 'exec:jadeProd', 'ts:build', 'concat:build', 'uglify:prod', 'copy:html']);
	grunt.registerTask('dev', ['less', 'exec:jadeDev', 'ts:build', 'concat:build', 'copy:html']);

};
