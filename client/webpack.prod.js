const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Required for CSS loaders

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new UglifyJSPlugin({
			sourceMap: true
		}),
	    new MiniCssExtractPlugin({
    	  filename: "[name].css",
    	  chunkFilename: "[id].css"
    	}) //Add this bit for CSS loaders
	]
});
