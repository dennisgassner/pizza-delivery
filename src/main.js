import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import store from './store/index'
import thePizzas from './components/ThePizzas'
import theBasket from './components/TheBasket'
import aPizza from './components/APizza'
import router from './router'

const app = createApp(App).use(router)
app.use(store)
app.use(vuetify)
app.component('the-pizzas',thePizzas);
app.component('the-basket',theBasket);
app.component('a-pizza',aPizza);
app.mount('#app')
