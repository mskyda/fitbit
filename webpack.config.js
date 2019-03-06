const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const DEV_DIR = path.resolve(__dirname, 'dev');
const DIST_DIR = path.resolve(__dirname, 'dist');
const JS_DEV_DIR = path.resolve(DEV_DIR, 'js');

const config = {
	entry : `${JS_DEV_DIR}/main.js`,
	output: {
		path    : DIST_DIR,
		filename: 'bundle.js'
	},
	resolve: { extensions: [ '.js', '.ts', '.vue' ]},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin
	]
};

module.exports = config;
