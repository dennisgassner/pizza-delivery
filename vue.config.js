module.exports = {
  devServer: {
    proxy: {
      "^/load_all_pizzas": {
        target: process.env.VUE_APP_API_BASEURL,
        changeOrigin: true,
        pathRewrite: {'^/load_all_pizzas': process.env.VUE_APP_API_ENDPOINT},
        ws:true
      },
      "^/pizzadetail/": {
        target: process.env.VUE_APP_API_BASEURL,
        changeOrigin: true,
        pathRewrite: {'^/pizzadetail/': 'delivery/pizza/'},
        ws:true
      },
      "^/get_token": {
        target: process.env.VUE_APP_API_TOKEN_BASEURL,
        changeOrigin: true,
        pathRewrite: {'^/get_token': process.env.VUE_APP_API_TOKEN_ENDPOINT},
        ws:true
      }
    }
  }
      ,  transpileDependencies: [
    'vuetify'
  ]

}
