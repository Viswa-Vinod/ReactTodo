var webpack = require('webpack');
var path = require('path');//path is a core node module
module.exports = {

	entry: [//order of scripts loading is important. 
			//jquery has to precede foundation. jQuery and Foundation 
	//need to be global scripts because they were not designed to work together 
	//with Webpack.
			//"style!", "css!", and "script!" allow us to use loaders for our files. 
			//This lets us require things we normally wouldn't be able to
			'script!jquery/dist/jquery.min.js',
			'script!foundation-sites/dist/js/foundation.min.js',
			'./app/app.jsx'
			], //where webpack needs to start processing our files
	externals: {
		jquery:'jQuery'
	},//set the global variable jQuery equal to the result of require('jquery')
	//Externals is needed because the Foundation script expects a jQuery
	//  variable to be globally available. This is the webpack way of 
	//creating a global that can be used in your scripts. 
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})

	],
	output: {
		path: __dirname, //folder where to generate the output
		filename: './public/bundle.js' //file path in folder where the output is to be generated

	},
	resolve:{
		root: __dirname,
		alias: {
			
			applicationStyles: 'app/styles/app.scss'
		},
		extensions: ['','.js','.jsx'] // you can now require('file') instead of require('file.js')
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	sassLoader: {
		
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	},
	devtool: 'cheap-module-eval-source-map'
}