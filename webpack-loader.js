//编写一个webpack插件
//自定义插件函数
//compiler 对象代表了完整的 webpack 环境配置。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用它来访问 webpack 的主环境。
//compilation 对象代表了一次资源版本构建。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。一个 compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。
function FileListPlugin(options){}

FileListPlugin.prototype.apply = function(compiler){
    compiler.plugin('emit',function(compilation,callback){
        //在生成文件中，创建一个头部字符串
        var filelist = 'In this build:\n\n';

        //遍历所有编译过的资源文件
        //对于每个文件名称，都添加一行内容

        for(var filename in compilation.assets){
            filelist += ('-'+filename+'\n');
        }

        //将这个列表作为一个新的文件资源，插入到webpack构建中

        compilation.assets['filelist.md'] = {
            source: function(){
                return filelist;
            },
            size:function(){
                return filelist.length;
            }
        },
        callback();
    })
};
module.exports = FileListPlugin;
