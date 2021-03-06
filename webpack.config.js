const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	'context': path.resolve('./src'),
	'plugins': [
		new MiniCssExtractPlugin({
			'filename': 'css/style.css',
			'chunkFilename': 'css/[name].css'
		})
	],
	'entry': {
		'polyfill': './js/polyfill.js',
		'app': './js/app.js'
	},
	'output': {
		'path': path.resolve(__dirname, 'dist'),
		'filename': 'js/[name].js',
		'publicPath': '/'
	},
	'module': {
		'rules': [
			{
				'test': /\.(sass|scss)$/,
				'exclude': /node_modules/,
				'use': [
					{
						'loader': MiniCssExtractPlugin.loader,
					},
					{
						'loader': 'css-loader',
						'options': {
							'url': false,
							'importLoader': 2
						}
					},
					{
						'loader': 'postcss-loader',
						'options': {
							'ident': 'postcss',
							'plugins': () => [
								require('autoprefixer')()
							]
						}
					},
					'sass-loader'
				]
			},
			{
				'test': /\.(js|jsx)$/,
				'exclude': /node_modules/,
				'use': [
					{
						'loader': 'babel-loader',
						'options': {
							'presets': ['@babel/preset-env', '@babel/preset-react']
						}
					}
				]
			}
		]
	},
	'resolve': {
		'extensions': ['.js', '.jsx', '.json', '.scss', '.css'],
		'alias': {
			'scss': path.resolve(__dirname, 'src/scss/'),
			'global': path.resolve(__dirname, 'src/js/global'),
			'config': path.resolve(__dirname, 'src/js/config'),
		}
	},
	'optimization': {
		'namedModules': true,
		'splitChunks': {
			'cacheGroups': {
				'default': false,
				'commons': {
					'test': /[\\/]node_modules[\\/]/,
					'name': 'vendor',
					'chunks': 'all'
				},
				'style': {
					'test': /\.(sass|scss|css)$/,
					'name': 'style', 
					'minChunks': 1,
					'reuseExistingChunk': true,
					'enforce': true
				}
			}
		}
	}
};
