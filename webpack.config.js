module.exports = {
	entry: ['./src/main'],
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.less$/,
				loader: 'style!css!less'
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist'
	}
};
