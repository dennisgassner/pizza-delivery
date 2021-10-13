<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(item, i) in getOfferedPizzas" :key="i">
      {{item.display_name}}
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted, computed} from 'vue'
import { request, gql } from 'graphql-request'
export default ({
  setup() {
    const store = useStore()

    onMounted (() => {
      store.dispatch('fetch_pizzas_graphql');
      const query = gql`
      {
        allPizzas {
          id, title          
        }
      }
    `

    request('http://localhost:8090/pizzamanagement/graphql', query).then((data) => console.log(data))
    })

    return {
          getOfferedPizzas: computed(()=>store.getters.get_available_pizzas)
        }



  },
})
</script>
