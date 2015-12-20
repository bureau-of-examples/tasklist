'use strict';

var LiveReload = require('connect-livereload');

module.exports = function(grunt) {

    grunt.config.init({
        browserify: {
            app:{
                src: 'src/js/app.js',
                dest: 'src/js/app.bundle.js',
                options: {
                    browserifyOptions: {
                        debug: true,
                        transform: ['hbsfy']
                    }
                }
            }
        },
        watch: {
            app: {
                files: ['src/js/**/*.js', 'src/templates/**/*.hbs'],
                tasks: ['browserify'],
                options: {
                    livereload: true
                }
            }
        },
        connect:{
            app: {
                options: {
                    port: 9001,
                    base: './src',
                    middleware: function(connect, options, middlewares){
                        middlewares.unshift(LiveReload());
                        return middlewares;
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default',['browserify']);
    grunt.registerTask('serve',['browserify:app', 'connect:app', 'watch:app']);

};