const CracoLessPlugin = require("craco-less");
const path = require("path");
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  webpack: {
    alias: {
      "@": pathResolve("src"),
    },
    plugins: {
      add: [
        new AntDesignThemePlugin({
          antDir: path.join(__dirname, "./node_modules/antd"),
          stylesDir: path.join(__dirname, "./src"),
          varFile: path.join(__dirname, "./src/styles/variable.less"),
          themeVariables: ["@primary-color"],
          indexFileName: "./public/index.html",
          generateOnce: true,
          customColorRegexArray: [],
          outputFilePath: path.join(__dirname, "./public/static/color.less"), //提取的less文件输出到什么地方
        }),
      ],
    },
  },
  babel: {
    plugins: [
      ["import", { libraryName: "antd", style: true }],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
