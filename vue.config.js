module.exports = {
  devServer: {
    proxy: {
      "^/delivery": {
        target: "http://localhost:8082",
        changeOrigin: true, 
        ws:true
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
