var webpack = require('webpack');
var path = require('path');//path is a core node module; The path module contains several helper functions to help make path manipulation easier.
var envFile = require('node-env-file'); //node-env-file lib is used to define env variables; see files config/test.env and config/development.env

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//this env var will be set by the production env, whether it be heroku or something else

try {
	
	//add all the defined env variables in the .env file onto process.env
	envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

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
		}),
		new webpack.optimize.UglifyJsPlugin({ //this plugin suppresses warning messages when webpack is run with -p
			compressor: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({ //plugin adds the variables in .env files into bundle.js
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				API_KEY: JSON.stringify(process.env.API_KEY),
				AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
				DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
				STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)
			}
		})

	],
	output: {
		path: __dirname, //folder where to generate the output
		filename: './public/bundle.js' //file path in folder where the output is to be generated

	},
	resolve:{
		root: __dirname,
		modulesDirectories: ['node_modules', './app/components','./app/api'], //with this line there wil be no need to create aliases for every component created 
		alias: {
			app: 'app', //with this, you can refer to any of the modules inside the app using paths relative to app folder without having to add an alias for each of them
			applicationStyles: 'app/styles/app.scss',
			actions: 'app/actions/actions.jsx',
			reducers: 'app/reducers/reducers.jsx',
			configureStore: 'app/store/configureStore.jsx'
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
	devtool: process.env.NODE_ENV === 'production'? undefined: 'cheap-module-eval-source-map'
}