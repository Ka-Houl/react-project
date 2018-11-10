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
        path : path.resolve(__dirname, '/'),   //出口文件
        filename : 'build.js'
    },
    plugins : [
        htmlPlugin    //在plugins中放入实例化的对象
    ]
}

//目的是为了减少配置文件的提及，webpack4.X版本中，约定大于配置的概念
//src -> index.js
//dist -> main.js