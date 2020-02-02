const paths = require('./paths')

require('./env')

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false'

module.exports = (webpackEnv) => {
  const isEnvDevelopment = webpackEnv === 'development'
  const isEnvProduction = webpackEnv === 'production'
  return {
    target: 'electron-main',
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    // Stop compilation early in production
    bail: isEnvProduction,
    devtool: isEnvProduction
      ? shouldUseSourceMap
        ? 'source-map'
        : false
      : isEnvDevelopment && 'cheap-module-source-map',
    entry: [paths.electronIndexJs],
    watch: isEnvDevelopment,
    output: {
      path: paths.electronOutput
    },
    resolve: {
      alias: {
        '@': paths.appSrc,
        '@e': paths.electronSrc
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                cache: true,
                formatter: require.resolve('react-dev-utils/eslintFormatter'),
                eslintPath: require.resolve('eslint'),
                resolvePluginsRelativeTo: __dirname
              },
              loader: require.resolve('eslint-loader')
            }
          ],
          include: paths.appSrc
        }
      ]
    }
    // externals: getExternals()
  }
}

function getExternals() {
  const pkg = require('../package.json')
  return Object.keys(pkg.dependencies).concat(Object.keys(pkg.devDependencies))
}
