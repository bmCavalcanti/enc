const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.js')
    .cleanupOutputBeforeBuild()
    // .enableBuildNotifications()
    .enableSingleRuntimeChunk()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(false)
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
    .enableSassLoader()
    //.enableTypeScriptLoader()
    .autoProvidejQuery()
    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[ext]',
        pattern: /\.(png|jpg|jpeg)$/
    })
;

module.exports = Encore.getWebpackConfig();