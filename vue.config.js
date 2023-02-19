const path = require("path");

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: '/',
    outputDir: path.resolve(__dirname, "../public"),
    transpileDependencies: true,
    chainWebpack: config => {
        config.plugins.delete('pwa');
    }
})
