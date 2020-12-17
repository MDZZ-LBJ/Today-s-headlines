const { resolveInclude } = require("ejs");

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
        filename:'js/[name].js'
    }
}