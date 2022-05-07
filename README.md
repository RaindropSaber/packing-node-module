# packing-node-module

Packing npm node_modules or custome file to a commonjs bundle

Can be used with [require-from-remote](https://www.npmjs.com/package/require-from-remote)

## How To Use

### API

```js
const build = require('packing-node-module')

// packing npm node_modules ,the node_modules needs to be installed
const axiosStr = await build('axios')

// packing custome file
const myFileStr = await build('./myFile.js')

// packing by config
// see config support from https://webpack.js.org/configuration/
const axiosStr = await build('axios', {
	mode: 'development',
})
```

### CLI

Packing npm node_modules ,the node_modules needs to be installed :
`npx pnm axios`

Packing custome file :
`npx pnm axios './myFile.js'`

Export to File :
`npx pnm 'axios' > axios.js`

Packing by config :
`npx pnm 'axios' './config.json'`

> see config support from https://webpack.js.org/configuration/

## Use with [require-from-remote](https://www.npmjs.com/package/require-from-remote)

1. Use [packing-node-module](https://www.npmjs.com/package/packing-node-module) to package your module or code

2. Upload the code to your cdn or server

3. Use [require-from-remote](https://www.npmjs.com/package/require-from-remote) to require url
