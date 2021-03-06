const { resolveInclude } = require("ejs");

module.exports = {
    mode: 'development', // 开发模式
    devtool: 'source-map', // 生成map文件
    optimization: {  
        minimize: false // 不压缩
    },
    entry:{ // 入口
       index:resolve(__dirname,'./src/index.js'),
       detail:resolve(__dirname,'./src/detail.js'),
       collections:resolve(__dirname,'./src/index.js'),
    }
}