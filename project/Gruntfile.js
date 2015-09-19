module.exports = function(grunt) {

	grunt.initConfig(
		{
			exec: {
				jadeDev: "node node_modules/.bin/jade src/public --out build --hierarchy --pretty"
			}
		}
	);

	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('dev', ['exec:jadeDev']);

};