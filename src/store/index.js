import { createStore } from 'vuex'
import axios from 'axios';
import { request, gql, GraphQLClient } from 'graphql-request'

const store= createStore({
  state: {
    available_pizzas: [],
    ordered_pizzas: []
  },
  mutations: {
    empty_available_pizzas(state) {
      state.available_pizzas = []
    },
    add_available_pizza(state, pizza) {
      state.available_pizzas.push({id:pizza.id, display_name:pizza.display_name, description:pizza.description, price:pizza.price, imgdata:pizza.imgbase64});
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
      context.commit('empty_available_pizzas')
      const tokenrequest = {
        body:"username="+process.env.VUE_APP_API_TOKEN_USERNAME+"&password="+process.env.VUE_APP_API_TOKEN_PASS+"&grant_type=password&client_id="+process.env.VUE_APP_API_TOKEN_CLIENTID+"",
        url:process.env.VUE_APP_API_TOKEN_REAL_URL,
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        handler:"oauthtoken"
      };

      let token;
      await axios.post('/get_token', tokenrequest)
      .then(response=>token = 'Bearer ' + response.data);

      axios.get('/load_all_pizzas', {headers: {
        Authorization: token
      }})
      .then((response) => {
          response.data.forEach(obj => {
             axios.get('/pizzadetail/'+obj.id, { headers: { Authorization: token } }
             ).then((res) => {
              context.commit('add_available_pizza',{id: res.data.id, display_name:res.data.title, description:res.data.description, price:res.data.price, imgbase64:res.data.image})
            })
          });
        })
        .catch(function(error) {
          console.log(error)
        });
    },
    async fetch_pizzas_graphql(context) {
      context.commit('empty_available_pizzas')
      const query = gql`
        {
          allPizzas {
            id, title, description, price     
          }
        }
      `
      request('/graphql/allPizzas/', query)
      .then(response => response.allPizzas.forEach(p => {
        context.commit('add_available_pizza',{id:p.id, display_name:p.title, description:p.description, price:p.price})
      })  );
    },
    create_new_pizza(context, newpizza) {
      const mutation = gql`
      mutation newPizza($title: String!, $description: String!, $price: Float!) {
        newPizza(input: {title: $title, description: $description, price: $price}) {
          id
          title
          description
          price
        }
      }
      ` 
      const variables = {
        title: newpizza.title,
        description: newpizza.desc,
        price: newpizza.price
      }
      const endpoint = '/graphql/api'
      const graphQLClient = new GraphQLClient(endpoint,{})
      graphQLClient.request(mutation, variables)
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