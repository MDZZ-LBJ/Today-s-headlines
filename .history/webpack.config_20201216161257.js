const { resolve } = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
    mode: 'development', // 开发模式
    devtool: 'source-map', // 生成map文件
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
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [autoprefixer('last 5 version')]
                            }
                        }
                    }
                ]
            }
        ]

    }
}