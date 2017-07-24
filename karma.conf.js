var webpackConfig = require('./webpack.config.js');
module.exports = function(config){
	config.set({
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'], //tells karma to use mocha framework
		files:[//the first two files are required so that karma knows about jquery and foundation when running tests
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/foundation-sites/dist/js/foundation.min.js',
			'app/tests/**/*.test.jsx'],
		preprocessors: {
			'app/tests/**/*.test.jsx': ['webpack','sourcemap']
		},
		reporters: ['mocha'],  //shows check marks or cross marks indicating test results
		client: {
			mocha: {
				timeout: '10000' //if testing is not over within 5s then terminate testing
			}
		},
		webpack: webpackConfig,
		webpackServer: {noinfo: true}
	});
};