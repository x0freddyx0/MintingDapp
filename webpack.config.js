const Dotenv = require( 'dotenv-webpack' );
const path = require("path");
const webpackPlugins = [
    new Dotenv( {
      path: './.env', // Path to .env file (this is the default)
      systemvars: true,
    } ),
  ];

  module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.css?$/,
          use: [ 'style-loader', 'css-loader' ],
        },
        {
          test: /\.(png|j?g|svg|gif)?$/,
          use: 'file-loader?name=./images/[name].[ext]',
        },
      ],
    },
    plugins: webpackPlugins,
  };