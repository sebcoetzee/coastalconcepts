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
			copy: {
				dev: {
					src: "src/js/app.js",
					dest: "build/js/app.js"
				}
			},
			uglify: {
				prod: {
					options: {
						sourceMap: false
					},
					files: {
						'build/js/app.js': ['src/js/app.js']
					}
				}
			}
		}
	);

	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['less', 'exec:jadeProd', 'uglify:prod']);
	grunt.registerTask('dev', ['less', 'exec:jadeDev', 'copy:dev']);

};