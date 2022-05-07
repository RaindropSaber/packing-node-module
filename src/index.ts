import * as webpack from 'webpack'
import { createFsFromVolume, Volume } from 'memfs'
const fs = createFsFromVolume(new Volume())

module.exports = (entry: string, opt: webpack.Configuration = {}): Promise<any> => {
	return new Promise((resolve, reject) => {
		const config: webpack.Configuration = {
			entry: entry,
			mode: 'production',
			target: 'node',
			...opt,
			output: {
				filename: './temp.bundle.js',
				libraryTarget: 'commonjs2',
				clean: true,
			},
		}
		const compiler = webpack(config)
		compiler.outputFileSystem = fs
		compiler.run((err, stats) => {
			if (err) {
				reject(err)
			}
			if (stats?.hasErrors()) {
				reject(stats.toJson().errors)
			} else {
				const code = fs.readFileSync(`./dist/${config.output?.filename}`, 'utf-8')
				resolve(code)
			}
		})
	})
}
