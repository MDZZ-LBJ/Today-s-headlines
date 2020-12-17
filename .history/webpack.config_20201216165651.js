const { resolve } = require('path')
const autoprefixer = require('autoprefixer') // 添加css前缀
const miniCssExtractPlugin = require('mini-css-extract-plugin') // 单独提取css文件
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', // 开发模式
    //  devtool: 'source-map', // 生成map文件
    optimization: {
        minimize: false // 不压缩
    },
    entry: { // 多文件入口
        index: resolve(__dirname, './src/js/index.js'),
        detail: resolve(__dirname, './src/js/detail.js'),
        collections: resolve(__dirname, './src/js/collections.js'),
    },
    output: { // 出口
        path: resolve(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    module: { // 配置loader
        rules: [ // 模块匹配规则
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: resolve(__dirname, 'node_modules'),//排除node_modules
                query: {
                    'presets': ['latest'] // 预设 转化为es5
                }
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader',
            },
            {
                test: /\.css$/,
                use: [ // 多个差价使用 use 写法
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [autoprefixer('last 5 version')]
                            }
                        }
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: [ // 多个差价使用 use 写法
                    'style-loader',
                    {
                        loader: miniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [autoprefixer('last 5 version')] // 兼容浏览器最近的5个版本
                            }
                        }
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|woff|eot|svg|ttf)$/i,
                loaders: 'url-loader?limit=1024$name=img/[name]-[hash:16].[ext]'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: resolve(__dirname, './src/index.html'),
            title: '新闻头条',
            chunks: ['index'],// 引入的js文件
            chunksSortMode: 'manual', // 引入的js文件顺序 按照当前数组顺序排
            excludeChunks: ['node_modules'], // 忽略node_modules
            minify: { // 去除换行和空格
                removeComments: true,
                collapseWhitespace: true,
            }
        }),
        new htmlWebpackPlugin({
            filename: 'detail.html',
            template: resolve(__dirname, './src/detail.html'),
            title: '新闻详情',
            chunks: ['detail'],
            chunksSortMode: 'manual',
            excludeChunks: ['node_modules'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            }
        }),
        new htmlWebpackPlugin({
            filename: 'collections.html',
            template: resolve(__dirname, './src/collections.html'),
            title: '我的新闻',
            chunks: ['collections'],
            chunksSortMode: 'manual',
            excludeChunks: ['node_modules'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            }
        })
    ],
    devServer: {
        watchOptions: {
            ignored: /node_modules/,
        },
        open: false,
        host: 'localhost',
        port: 3000
    }
}