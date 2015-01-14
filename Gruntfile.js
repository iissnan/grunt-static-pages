module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('./grunt/lib/helpers')(grunt);

    var settings = require('./grunt/settings');

    grunt.file.setBase(settings.basePath);

    grunt.config.init({
        settings: settings
    });

    var tasks = ['connect', 'watch'];

    grunt.config.set('connect', {
        options: {
            livereload: '<%= settings.server.LRPort %>'
        },
        server: {
            options: {
                port: '<%= settings.server.port %>',
                base: '<%= settings.server.base %>',
                hostname: '<%= settings.server.host %>',
                open: grunt.config.get('settings.server.open') &&
                    {target: 'http://localhost:' + '<%= settings.server.port%>'}
            }
        }
    });

    grunt.config.set('watch', {
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: '<%= settings.watch.static %>'
        }
    });

    // LESS support
    (function () {
        var lessSettings = grunt.config.get('settings.less');
        var lessFiles = lessSettings && lessSettings.files;

        if ( !grunt.helpers.isEmpty(lessFiles) ) {
            grunt.config.set('less', {
                development: {
                    files: lessFiles
                }
            });

            grunt.config.set('watch.less', {
                files: ['**/*.less'],
                tasks: ['less']
            });

            tasks.unshift('less');
        }
    }());

    grunt.task.registerTask('default', tasks);
};