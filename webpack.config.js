const path = require('path');
const webpack = require('webpack');

const public = './public';

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: public,
		hot: true
	},
	output: {
		path: path.resolve(__dirname, public),
		filename: 'bundle.js'
	}
};
