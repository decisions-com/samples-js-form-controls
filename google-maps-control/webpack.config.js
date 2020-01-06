const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const config = require('./js-control.config');

module.exports = env => {
  kickoffLogging(env);
  return {
    mode: isProduction(env) ? 'production' : undefined,
    entry: getEntry(env),
    devtool: getDevTool(env),
    devServer: {
      contentBase: './dist',
      hot: true,
    },
    stats: 'minimal',
    plugins: [
      isProduction(env) && new CleanWebpackPlugin(),
      isDev(env) &&
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html',
          chunks: config.JS_CONTROL_NAME,
          hash: true,
        }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      isDev(env) && new HTMLInlineCSSWebpackPlugin({ leaveCSSFile: true }),
    ].filter(plugin => !!plugin),
    output: {
      filename: isProduction(env) ? '[name].[contentHash].js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          // exclude: /(node_modules|bower_components)/,
          include: [path.resolve(__dirname, 'src')],
          use: {
            loader: 'ts-loader',
          },
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.less$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
        },
      ],
    },
    externals: config.externals
  };
};

// helper functions:

function isProduction(env) {
  return env && env.production;
}

function isDev(env) {
  return !isProduction(env);
}

function includeSourceMaps(env) {
  return env && env.sourceMaps;
}

function getDevTool(env) {
  return !isProduction(env) ? 'source-map' : includeSourceMaps(env) ? 'inline-source-map' : false;
}

function getEntry(env) {
  const entry = {};
  const ext = config.useTypeScript ? 'ts' : 'js';
  entry[config.JS_CONTROL_NAME] = isProduction(env)
    ? `./src/${config.JS_CONTROL_FILE_NAME}`
    : `./src/index.${ext}`;
  return entry;
}

function kickoffLogging(env) {
  if (isProduction(env)) {
    console.log(
      'Creating production build...',
      includeSourceMaps(env) ? 'with inline source maps!' : ''
    );
    if (includeSourceMaps(env)) {
      console.log("^^ Don't forget to change this when deploying! ^^");
    }
  } else {
    console.log('Creating dev build...');
  }
}
