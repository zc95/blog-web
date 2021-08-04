const path = require('path');

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: 5000,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: 'http://localhost:3000'
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src')
            }
        }
    }
};
