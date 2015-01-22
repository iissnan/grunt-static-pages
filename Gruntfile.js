module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('./tasks/lib/helpers')(grunt);

    var _ = require('lodash');
    var util = require('util');
    var path = require('path');
    var defaults = require('./tasks/settings');
    var settingsPath = grunt.option('sm') || './grunt-sm.json';
    var settings = {};
    var tasks = ['connect', 'watch'];
    var gruntFilePath = process.cwd();

    try {
        grunt.log.writeln(util.format('Loading %s ...', settingsPath));
        settings = grunt.file.readJSON(settingsPath);
        grunt.log.writeln('Loaded the configuration file.');
    } catch (e) {
        grunt.log.writeln('');
        grunt.fail.fatal(
            'Parse "grunt-sm.json" failed. Please check: \n' +
            '  1) grunt-sm.json exists.\n' +
            '  2) grunt-sm.json is a valid json file.\n'
        );
    }

    _.defaults(settings, defaults);

    grunt.helpers.checkPath(
        path.resolve(settings.basePath),
        util.format('\n指定路径不存在! 路径: %s \n请检查项目路径是否正确!\n', settings.basePath),
        true
    );
    grunt.file.setBase(settings.basePath);
    grunt.config.init({settings: settings});

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
        options: {
            cliArgs: [
                '--gruntfile', path.join(gruntFilePath, 'Gruntfile.js'),
                '--sm', settingsPath
            ]
        },
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: '<%= settings.watch %>'
        }
    });

    // LESS support
    var lessSettings = grunt.config.get('settings.less');

    if (!grunt.helpers.isEmpty(lessSettings) ) {
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