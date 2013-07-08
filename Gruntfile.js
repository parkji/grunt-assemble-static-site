module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        assemble: {
            options: {
                layout: "src/layouts/default.hbs",
                flatten: true
            },
            pages: {
                files: {
                    'web/': ['src/pages/**/*.hbs']
                }
            }
        },
        clean: {
            all: ['web/*.html']
        }
    });
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['clean', 'assemble']);
};
