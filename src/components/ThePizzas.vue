<template>
  <v-container  fluid>
    <v-row >
      <v-col v-for="(item, i) in getOfferedPizzas" :key="i">
        <a-pizza   :pizza ="{title:item.display_name, 
                    description:item.description, 
                    price:item.price, 
                    id:item.id}" @buy="addToBasket($event)"></a-pizza>    
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue'
import { computed, onMounted  } from 'vue'
import { useStore } from 'vuex'
import APizza from './APizza.vue'

export default defineComponent({
  components: { APizza },
    setup() {
        const store = useStore()

        onMounted (() => {
          store.dispatch('fetch_pizzas');
        })

        return {
        getOfferedPizzas: computed(()=>store.getters.get_available_pizzas),
        addToBasket:(id)=>store.dispatch('order_pizza', id)
        }

  },
})
</script>


<style scoped>

</style>