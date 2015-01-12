## 如何使用

1. 安装Node.js: [Node.js](http://nodejs.org/download/).
2. 安装Grunt: Node.js安装完成后，使用`npm`包管理命令安装`grunt-cli`（首次安装后即可，不用每次安装）。命令如下：

    ```
    npm install -g grunt-cli
    ```

3. 检出工具： 检出此工具，并在工具目录下进行开发。检出命令：

    ```
    git clone https://github.com/iissnan/grunt-static-pages.git StaticPages
    ```

    StaticPages为签出后的文件名

4. 安装依赖：在工具目录下执行`npm install`安装所需依赖。命令如下：

    ```
    npm install
    ```

5. 启动服务器： 在工具目录下执行`grunt`来启动服务器。

   * 服务器默认端口是 `9000`。
   * 默认的监视路径是工具目录
   * 默认监视的文件类型有： `**/*.html`, `**/*.css`, `**/*.js`

   以上选项均可在`Gruntfile.js`中进行修改。

6. 编辑`HTML`， `CSS`或者`JavaScript`，服务器会自动重载。