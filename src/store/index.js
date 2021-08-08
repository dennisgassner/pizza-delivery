import { createStore } from 'vuex'
import axios from 'axios';

const store= createStore({
  state: {
    available_pizzas: [],
    ordered_pizzas: []
  },
  mutations: {
    add_available_pizza(state, pizza) {
      state.available_pizzas.push({id:pizza.id, display_name:pizza.display_name, description:pizza.description, price:pizza.price, imgdata:"data:image/jpeg;base64,"+pizza.imgbase64});
    },
    add_ordered_pizza(state, id) {
      const pizza = state.available_pizzas.filter(item => item.id === id)[0]   
      let already_ordered = state.ordered_pizzas.filter(item => item.pizza.id == id)[0]
      if (already_ordered) {
        already_ordered = {count:already_ordered.count+1, pizza:already_ordered.pizza}
        state.ordered_pizzas[state.ordered_pizzas.findIndex(item => item.pizza.id == id)] = already_ordered
      } else {
        state.ordered_pizzas.push({count:1, pizza:pizza})
      }
    }
  
  },
  actions: {
    order_pizza(context, id) {
      context.commit('add_ordered_pizza', id);
    },
    async fetch_pizzas(context) {
      axios.get('/delivery/list_all')
        .then((response) => {
          response.data.forEach(obj => {
            context.commit('add_available_pizza',
              {id: obj.id, display_name:obj.title, description:obj.description, price:obj.price, imgbase64:obj.image});
          });
        }).catch(function(error) {
          console.log(error)
        });
    }
  },
  getters: {
    get_available_pizzas(state) {
      return state.available_pizzas;
    },
    get_ordered_pizza(state) {
      return state.ordered_pizzas;
    }
  }

})
export default store