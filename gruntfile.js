'use strict';

module.exports = function(grunt) {
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            jade: {
                files: ['app/views/**'],
                options: {
                    livereload: true,
                },
            },
            js: {
                files: ['public/js/**', 'app/**/*.js', 'config/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true,
                },
            },
            html: {
                files: ['public/views/**'],
                options: {
                    livereload: true,
                },
            },
            css: {
                files: ['public/css/**'],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            all:['gruntfile.js', 'public/js/**/*.js', 'test/mocha/**/*.js', 'test/karma/**/*.js', 'app/**/*.js'],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },
        nodemon: {
            dev: {
                script: 'app.js',
                options: {
                    args: ['--color'],
                    ignore: ['README.md', 'node_modules/**', '.DS_Store'],
                    ext: 'js',
                    watch: ['app', 'config', 'app.js', 'gruntfile.js', 'app/**/*.js'],
                    delay: 1000,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },
        ngconstant: {
            options: {
                name: 'osucelebrity.config',
                dest: 'public/js/constants.js',
            },
            development: {
                constants: {
                    intervals: {
                        player: 1500,
                        vote: 1500,
                        queue: 1500
                    }
                }
            },
            production: {
                constants: {
                    intervals: {
                        player: 1000,
                        vote: 1000,
                        queue: 1000
                    }
                }
            }
        },
        mochaTest: {
            options: {
                reporter: 'spec'
            },
            src: ['test/mocha/**/*.js']
        },
        env: {
            test: {
                NODE_ENV: 'test'
            }
        },
        karma: {
            unit: {
                configFile: 'test/karma/karma.conf.js'
            }
        }
    });

    //Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-ng-constant');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-copy');

    grunt.option('force', false);

    //Default task(s).
    grunt.registerTask('default', ['ngconstant:development', 'jshint', 'concurrent']);

    //Build task(s).
    grunt.registerTask('build', ['ngconstant:production']);

    //Test task.
    grunt.registerTask('test', ['ngconstant:production', 'env:test', 'mochaTest', 'karma:unit']);
};