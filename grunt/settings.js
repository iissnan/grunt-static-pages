module.exports = {

    // 设定需要监视的文件目录
    basePath: './',

    // 设定服务器端口号，例如： 9000
    port: 9000,

    // 设定服务器端口监听的地址，默认是*。例如： 0.0.0.0
    host: '*',

    // 设定是否自动调用浏览器，打开服务器指定的地址。
    // 默认是 true，可选值： true | false
    autoOpen: true,

    // LiveReload使用的端口号。请勿修改，除非端口已经被占用
    LRPort: 35729,

    // 需要监视的文件类型，例如：.html, .css
    // 预编译类型的文件（LESS、CoffeeScript等）不需要添加，只要有设定就会自动监视
    watch: [
        '**/*.html', '**/*.js', '**/*.css',
        '**/*.jpg', '**/*.png', '**/*.gif',
        '**/*.woff', '**/*.eot', '**/*.ttf',
        '**/*.svg',
        '!**/node_modules/**'
    ],

    // 设定LESS文件组，形式：{ CSS文件的路径/名字:  LESS文件的路径/名字 }，例如：
    less: {
        //"css/main.css": "less/main.less",
        //"css/extra.css": "less/extra.less"
    }
};