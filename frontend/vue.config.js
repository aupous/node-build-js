const { argv } = require("yargs");

const iDProduct = "abc123";
const shopID = "456";
module.exports = {
  css: {
    extract: false,
  },
  configureWebpack: {
    output: {
      filename: `${argv.productID}-${argv.shopID}.js`,
      chunkFilename: "[name].js",
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .use("url-loader")
      .tap((options) => Object.assign({}, options, { name: "[name].[ext]" }));
    config.plugin("define").tap((options) => {
      options[0]["process.env"]["productID"] = `"${argv.productID}"`;
      options[0]["process.env"]["shopID"] = `"${argv.shopID}"`;
      return options;
    });
  },
};
