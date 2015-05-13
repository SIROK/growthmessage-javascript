module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['./ts/*.ts'],
                dest: './dist/growthmessage.js',
                options: {
                    sourceMap: true,
                    declaration: false,
                },
            },
        },
        tjs2GM: {
            src: './bower_components/t.js/t.min.js',
            dest: './dist/growthmessage.js',
        },
        uglify: {
            dist: {
                files: {
                    './dist/growthmessage.min.js': ['./dist/growthmessage.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['./ts/*.ts'],
                tasks: ['typescript', 'tjs2GM', 'uglify'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    require('load-grunt-tasks')(grunt);
    grunt.loadTasks('./tasks');

    grunt.registerTask('default', ['typescript', 'tjs2GM', 'uglify']);

};
