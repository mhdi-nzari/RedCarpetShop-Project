const sass = require('node-sass');


module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            dist: {
                src: ['./src/js/jquery.js',
                    '/src/js/bootstrap.bundle.min.js',
                    './src/js/owl.carousel.min.js',
                    './src/js/custom.js'
                ],
                dest: 'dist/js/config.js'
            },

        },

        sass: {
            options: {
                implementation: sass,
                outputStyle: 'compressed',
                sourceMap: true,
            },
            dist: {
                files: [{
                    src: ['src/scss/style.scss', 'src/scss/css_reset.scss'],
                    dest: 'dist/css/style.css'
                }]
            }
        },

        watch: {
            options: {
                spawn: false,
                reload: true,
            },
            sctipts: {
                files: ['/src/js/*.js',
                    '/src/scss/css_reset.scss',
                    '/src/scss/style.scss'
                ],
                tasks: ['concat', 'sass'],
            }

        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'sass', 'watch'])
};