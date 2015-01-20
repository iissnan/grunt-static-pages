module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('./grunt/lib/helpers')(grunt);

    var _ = require('lodash');
    var util = require('util');
    var defaults = require('./grunt/settings');
    var settingsPath = './grunt-sm.json';
    var settings = {};
    var tasks = ['connect', 'watch'];

    if (grunt.file.exists(settingsPath)) {
        try {
            settings = grunt.file.readJSON(settingsPath);
        } catch (e) {}
    }

    _.defaults(settings, defaults);

    grunt.helpers.checkPath(
        settings.basePath,
        util.format('\n指定路径不存在! 路径: %s \n请检查项目路径是否正确!\n', settings.basePath),
        true
    );
    grunt.file.setBase(settings.basePath);
    grunt.config.init({settings: defaults});

    grunt.config.set('connect', {
        options: {
            livereload: '<%= settings.LRPort %>'
        },
        server: {
            options: {
                port: '<%= settings.port %>',
                base: '<%= settings.base %>',
                hostname: '<%= settings.host %>',
                open: grunt.config.get('settings.autoOpen') &&
                    {target: 'http://localhost:' + '<%= settings.port%>'}
            }
        }
    });

    grunt.config.set('watch', {
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: '<%= settings.watch %>'
        }
    });

    // LESS support
    var lessSettings = grunt.config.get('settings.less');

    if ( !grunt.helpers.isEmpty(lessSettings) ) {
        grunt.config.set('less', {
            development: {
                files: lessSettings
            }
        });

        grunt.config.set('watch.less', {
            files: ['**/*.less'],
            tasks: ['less']
        });

        tasks.unshift('less');
    }

    grunt.task.registerTask('default', tasks);
};