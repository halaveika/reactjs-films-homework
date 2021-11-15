const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  mode: 'production',
  context: __dirname,
  entry: ['../../src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,"css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader"]
      }
    ],
  },
  resolve: {
    extensions: [".jsx",".js"],
  },
  devtool: 'inline-source-map',
  plugins: [
    new FaviconsWebpackPlugin('../../public/assets/images/film-icon.png'),
    new HtmlWebpackPlugin({
      template:  path.resolve(__dirname, '../../src/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, '../../public/assets/images') , to: 'assets/images'},
        // { from: path.resolve(__dirname, '../../public/fonts') , to: 'assets/fonts'},
      ],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
    }),
  ],
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, '../../build'),
    clean: true,
   publicPath: '/',
  },
};
