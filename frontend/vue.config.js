const iDProduct = "abc123";
const shopID = "456";
module.exports = {
    css: {
        extract: false
    },
    configureWebpack: {
        output: {
            filename: iDProduct + "-" + shopID + ".js",
            chunkFilename: '[name].js',
        }
    },
    chainWebpack: (config) => {
        config.module
            .rule('images')
            .use('url-loader')
            .tap(options => Object.assign({}, options, {name: '[name].[ext]'}));
    },
};