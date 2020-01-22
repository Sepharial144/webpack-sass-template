const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {

	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: './app.js',
	
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist'),
	},

	devServer: {
		open: true,
		contentBase: './dist',
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
			title: 'Starter template'
		}),
		new CleanWebpackPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader', 
					'css-loader', 
			        {
			            loader: 'sass-loader',
			            options: {
			              // Prefer `dart-sass`
			              implementation: require('sass'),
			              sassOptions: {
			              	fiber: false,
			              },
			            },
			        },
				],
			},
		],
	},
}