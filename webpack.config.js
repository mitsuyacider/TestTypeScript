const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development", // "production" | "development" | "none"

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/ts/index.ts",

  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },

  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            //   options: {
            //     sassOptions: {
            //       prependData: '@import "@/sass/variables";',
            //     },
            //     additionalData: `@import "@/sass/variables";`,
            //   },
          },
        ],
      },
    ],
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    modules: [
      "node_modules", // node_modules 内も対象とする
    ],
    extensions: [
      ".ts",
      ".js", // node_modulesのライブラリ読み込みに必要
    ],
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    //   },
    // }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
