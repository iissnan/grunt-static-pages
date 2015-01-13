module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.config.init({
        settings: {
            server: {
                // 设定服务器端口号，例如： 9000
                port: 9000,

                // 设定需要监视的文件目录，默认是与Gruntfile.js同级的目录
                base: '.',

                // 设定服务器端口监听的地址，默认是*。例如： 0.0.0.0
                host: '*',

                // 设定是否自动调用浏览器，打开服务器指定的地址。默认是 true，可选值： true | false
                open: true
            },

            watch: {
                // 需要监视的文件类型，例如：.html, .css
                static: ['**/*.html', '**/*.js', '**/*.css']
            },

            less: {
                // 设定LESS文件组，形式：{ 目标文件的路径/名字:  LESS文件的路径/名字 }，例如：
                // "example/css/main.css": "example/less/main.less",
                // "example/css/extra.css": "example/less/extra.less"
            }
        }
    });

    var tasks = ['connect', 'watch'];

    grunt.config.set('connect', {
        options: {
            livereload: 35729
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

        if ( !isEmpty(lessSettings) ) {
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
    }());

    grunt.task.registerTask('default', tasks);


    /**
     * Test if obj is empty.
     *
     * @param {Object} obj
     * @returns {boolean}
     */
    function isEmpty(obj) {
        if (obj == null) return true;
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) return false;
        }
        return true;
    }
};