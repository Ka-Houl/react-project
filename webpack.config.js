//暴露一个打包配置对象
var path = require('path');   //更改路径的配置
var HtmlWebpackPlugin = require('html-webpack-plugin');
//创建一个实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template : path.resolve(__dirname, './src/index.html'),//源文件
    filename : 'build.html'  //生成内存中页面的名称
})

module.exports = {
    mode : 'development',   //production
    entry : './src/index.js',  //入口文件
    output : {
        path : path.resolve(__dirname, '/dist'),   //出口文件
        filename : 'build.js'
    },
    plugins : [
        htmlPlugin    //在plugins中放入实例化的对象
    ],
    module : {
        rules : [
            {
                test : /\.js|jsx$/,
                use : 'babel-loader',
                exclude : /node_modules/
            },
            {
                test : /\.css$/,
                //只有像.title这样的类选择器或者ID选择器，才会被模块化控制，类似body标签选择器是不会被模块化控制的
                //使用localIdentName自定义模块类名格式
                //[path]：文件的路径动态变化，相对于项目根目录所在的路径
                //[name]： 表示样式表文件的名称
                //[local]：表示的是样式表类名的名称
                //[hash]：表示32位的hash值
                use : ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]'],
                exclude : /node_modules/
            }
        ]
    },
    devServer : {
        contentBase : './dist',
        open : true,
        port : 3000,
        openPage : 'build.html'
    },
    resolve : {
        //重新设定路径名称
        alias : {
            '@' : path.join(__dirname, './src')
        },
        //这些文件名可以省略不写
        extensions : ['.js', '.jsx', '.json']
    }
}

//目的是为了减少配置文件的提及，webpack4.X版本中，约定大于配置的概念
//src -> index.js
//dist -> main.js