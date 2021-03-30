const path = require('path')
const {override, fixBabelImports, addWebpackResolve, addWebpackAlias} = require('customize-cra')

function resolve(dir) {
    console.log('the dir is ', dir)
    console.log(path.join(__dirname, '.', dir))
    return path.join(__dirname, '.', dir)
}


module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css'
    }),
    addWebpackResolve({
        extensions: ['.js', '.json', '.jsx']
    }),
    addWebpackAlias({
        "@": resolve('src'),
        "@assets": resolve('src/assets/')
    })
)
