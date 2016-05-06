var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './lib/index'
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
      '__DEVTOOLS__': process.env.DEVTOOLS === 'true' ? true : false
    }),
    new HtmlWebpackPlugin({
      title: '教学系统',
      filename: 'index.html',
      template: 'index.template.html',
      favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico')
    })
  ],
  module: {
    loaders: [
      { 
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader' 
      }, // use ! to chain loaders
      { 
        test: /\.css$/,
        loader: 'style-loader!css-loader!cssnext-loader' 
      },
      /*{ 
        test: /\.(png|jpg|svg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=1&name=[path][name].[ext]'
      },*/
      {
          //html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
          //比如你配置，attrs=img:src img:data-src就可以一并处理data-src引用的资源了，就像下面这样
          test: /\.html$/,
          loader: "html?attrs=img:src img:data-src"
      }, 
      {
          //文件加载器，处理文件静态资源
          test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader?name=[path][name].[ext]'
      },
      {
          //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
          //如下配置，将小于8192byte的图片转成base64码
          test: /\.(png|jpg|gif)$/,
          //loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
          loader: 'url-loader?limit=1&name=[path][name].[ext]'
      },
     // url-loader?limit=8192{ test: /\.css$/, loader: 'style-loader!css-loader!cssnext-loader' },
      { 
        test: /\.js$/,
        loader: 'babel', include: path.join(__dirname, 'lib') 
      }
    ]
  },
  cssnext: {
    browsers: 'last 2 versions'
  }
};
