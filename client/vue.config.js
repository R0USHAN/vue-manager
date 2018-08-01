
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = {
    baseUrl: '/public',
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json', '.styl'],
            alias: {
                '@': resolve('src'),
            }
        },
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:7001',
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}