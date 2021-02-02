var webpackConfig = require("./webpack.config");

module.exports = function (grunt) {
    grunt.initConfig({
        exec: {
            pugProd: "npx pug src/public --out build",
            pugDev: "npx pug src/public --out build --pretty",
        },
        uglify: {
            prod: {
                options: {
                    sourceMap: false,
                },
                files: {
                    "build/js/app.js": ["build/js/app.js"],
                },
            },
        },
        concat: {
            build_js: {
                src: [
                    "bower_components/jquery/dist/jquery.min.js",
                    "bower_components/bootstrap/dist/js/bootstrap.min.js",
                    "bower_components/jquery.easing/jquery.easing.min.js",
                    "bower_components/jquery-migrate/jquery-migrate.min.js",
                    "bower_components/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js",
                    "bower_components/jquery-placeholder/jquery.placeholder.min.js",
                    "bower_components/jquery-sticky/jquery.sticky.js",
                    "bower_components/flexslider/jquery.flexslider-min.js",
                    "bower_components/mixitup/src/jquery.mixitup.js",
                    "bower_components/parallax/deploy/jquery.parallax.min.js",
                    "bower_components/wow/dist/wow.min.js",
                    "build/bundle.js",
                ],
                dest: "build/bundle.js",
            },
            build_css: {
                src: [
                    "bower_components/bootstrap/dist/css/bootstrap.min.css",
                    "bower_components/Ionicons/css/ionicons.min.css",
                    "bower_components/flexslider/flexslider.css",
                    "bower_components/animate.css/animate.min.css",
                ],
                dest: "build/css/style.css",
            },
        },
        copy: {
            html: {
                expand: true,
                cwd: "src/html/",
                src: "**",
                dest: "build/",
                flatten: true,
                filter: "isFile",
            },
            ionicons: {
                expand: true,
                cwd: "bower_components/Ionicons/fonts/",
                src: "**",
                dest: "build/fonts/",
                filter: "isFile",
            },
        },
        cssmin: {
            options: {
                keepSpecialComments: 0,
            },
            build: {
                files: {
                    "build/css/style.css": ["build/css/style.css"],
                },
            },
        },
        webpack: {
            prod: Object.assign(webpackConfig, { mode: "production" }),
            dev: Object.assign(webpackConfig, { mode: "development" }),
        },
    });

    grunt.loadNpmTasks("grunt-exec");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-webpack");

    grunt.registerTask("default", [
        "exec:pugProd",
        "webpack:prod",
        "concat:build_js",
        "concat:build_css",
        "copy:html",
        "copy:ionicons",
        "cssmin",
    ]);
    grunt.registerTask("dev", [
        "exec:pugDev",
        "webpack:dev",
        "concat:build_js",
        "concat:build_css",
        "copy:html",
        "copy:ionicons",
    ]);
};
