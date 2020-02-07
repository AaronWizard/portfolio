const path = require('path');

module.exports = {
	context: path.resolve('src'),
	entry: [
		'./index.js'
	],
	output: {
		path: path.resolve('www'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
