var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var config = {
	entry : [
		'webpack/hot/dev-server',
    	'webpack-dev-server/client?http://localhost:3000',
		'./app/index.js'
		],
	output : {
		path : path.resolve(__dirname, 'dist'),
		filename : 'bundile.js'
	},
	module:{
		loaders:[
			{
				test: /\.less$/,
			    loaders: ['style', 'css', 'less'],
			    include: path.resolve(__dirname, 'app')
			},
			{ 
			    test: /\.jsx?$/, 
			    loader: 'babel', 
			    exclude: /node_modules/,
			    query: {
			      presets: ['react', 'es2015'] 
			    }
			}
		]
	},
	plugins:[
		new UglifyJsPlugin({ minimize: true }),
		new HtmlWebpackPlugin({
			title: '这是一个历史的时刻',
		    template: path.resolve(__dirname, 'templates/index.ejs'),
		    inject: 'body'
    	})
	],
	
	
}

module.exports = config;