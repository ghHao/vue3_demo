const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  publicPath: './',
  // 生成文件的目录名称（要和baseUrl的生产环境路径一致）
  outputDir: 'dist',
  // lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: false,
  /**
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   * 打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
   * map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
   * 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
   * */
  productionSourceMap: process.env.NODE_ENV !== 'production',

  chainWebpack (config) {
    // 路径替换
    config.resolve.alias.set('@', resolve('src')).set('assets', resolve('src/assets')).set('components', resolve('src/components')).set('base', resolve('baseConfig'))
  },
  // Vue 兼容ie
  transpileDependencies: false
})
