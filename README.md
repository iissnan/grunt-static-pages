## 如何使用

1. 下载并安装[Node.js](http://nodejs.org/download/).
2. 安装[Grunt](http://gruntjs.com/)

    Node.js安装完成后，使用`Node.js`的包管理命令`npm`安装`grunt`。
    首次安装后即可，不用每次安装。在命令行中（任意路径下）执行命令：

    ```
    npm install -g grunt-cli
    ```

3. 下载此工具

    如果你已经安装了[git](http://git-scm.com/)，可以`clone`一份（推荐）。

    * 通过`git`来下载代码

        ```
        git clone https://github.com/iissnan/grunt-static-pages.git StaticPages
        ```

        StaticPages为`clone`后代码存放的目录名字。通过这种方式可以执行`pull`来获取最新的版本：

        ```
        git pull origin master
        ```

    * 或者，你可以[下载此工具](https://github.com/iissnan/grunt-static-pages/archive/master.zip)

4. 安装工具的依赖包

    切换到工具目录下，并执行`npm install`安装所需依赖。命令如下：

    ```
    npm install
    ```

5. 放置静态项目文件

    将静态项目的文件放置在工具目录下，例如，项目`example`。

    ```
    .
    |-- example  -- Example项目
    |-- Gruntfile.js
    |-- node_modules
    |-- package.json
    `-- README.md
    ```


5. 启动服务器

    在工具目录下执行`grunt`来启动服务器。

    * 服务器默认端口是 `9000`。
    * 默认的监视路径是工具目录
    * 默认监视的文件类型有： `**/*.html`, `**/*.css`, `**/*.js`

   以上选项均可在`Gruntfile.js`中进行修改。

6. 编辑项目目录下的`HTML`， `CSS`或者`JavaScript`文件，服务器会自动重载。

## LESS支持

在`Gruntfile.js`中，修改`settings`下的`less`即可开启LESS支持。当开启了`less`支持后，工具将会自动监视`less`文件的改动。
`less`文件发生改动的时候，将自动编译成对应的`css`。

设定的格式如下：

```
{ 目标文件的路径/名字:  LESS文件的路径/名字 }
```

以`example`项目为例，这个项目包含三个`less`文件，其中`main.less`将`core.less`包含进去，并最终输出`main.css`；而`extra.less`将输出`extra.css`。
配置如下：

```
less: {
  "example/css/main.css": "example/less/main.less",
  "example/css/extra.css": "example/less/extra.less"
}
```