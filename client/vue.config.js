
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json', '.styl'],
            alias: {
                '@': resolve('src'),
            }
        },
    }
}