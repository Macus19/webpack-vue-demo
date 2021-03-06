const webpack = require('webpack')
const config = require('./webpack.base.conf')

webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error(err)
        return
    }
    console.log(stats.toString({
        chunks: false,
        colors: true
    }))
})