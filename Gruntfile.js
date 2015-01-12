module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.config.init({
        settings: {
            // 设定服务器端口号，例如： 9000
            port: 9000,

            // 设定需要监视的文件目录，默认是与Gruntfile.js同级的目录
            base: '.',

            // 需要监视的文件类型，例如：.html, .css
            files: [
                '**/*.html',
                '**/*.js',
                '**/*.css'
            ]
        }
    });

    grunt.config.set('connect', {
        options: {
            livereload: 35729
        },
        server: {
            options: {
                port: '<%= settings.port %>',
                base: '<%= settings.base %>',
                hostname: '*'
            }
        }
    });

    grunt.config.set('watch', {
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: '<%= settings.files %>'
        }
    });

    grunt.task.registerTask('default', ['connect', 'watch']);
};