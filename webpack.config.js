const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json']
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.ejs',
			hash: true,
			filename: 'index.html',
		}),
	],
};






