
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const extractLESS = new ExtractTextPlugin('assets/css/[name].[chunkhash].css');

let config = {
    entry:{},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].[chunkhash].bundle.js'
    },
    module:{
        rules:[
            {
                test:require.resolve('react'),
                use: [{
                    loader: 'expose-loader',
                    options: 'React'
                }]
            },
            {
                test:require.resolve('react-dom'),
                use: [{
                    loader: 'expose-loader',
                    options: 'ReactDom'
                }]
            },
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test:/\.less$/,
                use:extractLESS.extract(['css-loader','less-loader'])
            }
        ]
    },
    plugins:[
        extractLESS,
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        }),
    ],
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        open: true, //打开默认浏览器
        openPage: 'indexpage.html', //指定自动打开的页面
        port: 9000
    },
    devtool: 'cheap-module-source-map'
}

//业务入口文件所在的目录
let chunknames = [];
let entries = [];
let entryDir = path.join(__dirname, 'views/');
glob.sync(entryDir + '*').forEach(function (entry) {
    let basename = path.basename(entry);
    chunknames.push(basename);
    entries.push({
        name: basename,
        path: entry
    });
});

entries.forEach(function (entry) {
    //添加entry
    config.entry[entry.name] = [path.join(entry.path, 'index.js')];
    //生成html
    config.plugins.push(new htmlWebpackPlugin({
        filename: entry.name + '.html',
        template: entry.path + '/index.html',
        chunks: ['common', entry.name],
        hash: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true
        }
    }));
});

config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    minChunks: 2, //只要有两个以上的模块包含同样的模块就提取到公共js中
    chunks: chunknames
}));


module.exports = config;