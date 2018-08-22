const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
	webpack(config) {
		config.resolve.plugins = [new TsConfigPathsPlugin()]
		return config
	}
})
