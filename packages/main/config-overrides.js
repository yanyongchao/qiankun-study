const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require("customize-cra");
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
process.env.CI = "false";
const addCustomize = () => (config) => {
  if (config.output.publicPath) {
    config.output.publicPath =
      process.env.NODE_ENV === "production"
        ? "/react-antd-admin-template/"
        : "/";
  }
  if (config.resolve) {
    config.resolve.extensions.push(".jsx");
  }
  config.plugins.push(
    new AntDesignThemePlugin({
      antDir: path.join(__dirname, "./node_modules/antd"),
      stylesDir: path.join(__dirname, "./src"),
      varFile: path.join(__dirname, "./src/styles/variable.less"),
      themeVariables: ["@primary-color"],
      indexFileName: "./public/index.html",
      generateOnce: true,
      customColorRegexArray: [],
      outputFilePath: path.join(__dirname, "./public/color.less"), //提取的less文件输出到什么地方
    })
  );
  return config;
};
module.exports = override(
  // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true, // 自动打包相关的样式
  }),

  // 使用less-loader对源码中的less的变量进行重新指定
  addLessLoader({
    javascriptEnabled: true,
  }),

  // 配置路径别名
  addWebpackAlias({
    "@": resolve("src"),
  }),
  addCustomize()
);
