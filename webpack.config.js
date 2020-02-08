const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const dist = './dist';

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index.html'
		})
	],
	devServer: {
		historyApiFallback: true,
		hot: true
	},
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, dist),
		publicPath: '/'
	}
};
