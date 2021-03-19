module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'My App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // настройки манифеста
    manifestOptions: {
      display: 'fullscreen',
      background_color: '#42B883'
      // ...другие настройки манифеста...
    },
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080, // CHANGE YOUR PORT HERE!
    https: true,
    hotOnly: false,
  },
}
