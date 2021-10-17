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
      },
      "^/graphql/allPizzas/": {
        target: "http://localhost:8090",
        changeOrigin: true,
        pathRewrite: {'^/graphql/allPizzas/': '/pizzamanagement/graphql'},
        ws:true
      },
      "^/graphql/newPizza/": {
        target: "http://localhost:8090",
        changeOrigin: true,
        pathRewrite: {'^/graphql/newPizza/': '/pizzamanagement/graphql'},
        ws:true
      }
      ,"^/graphql/api": {
        target: "http://localhost:8090",
        changeOrigin: true,
        pathRewrite: {'^/graphql/api': '/pizzamanagement/graphql'},
        ws:true
      }
    }
  }
      ,  transpileDependencies: [
    'vuetify'
  ]

}
