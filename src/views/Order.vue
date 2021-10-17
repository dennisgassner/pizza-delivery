<template>
  <v-container fluid>
    <v-row>
      <v-col md="8" >
        <the-pizzas/>
      </v-col>
      <v-spacer></v-spacer>
      <v-col md="4">
        <the-basket/>
      </v-col>
    </v-row>
  </v-container>
   <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      <router-link to="/manage"><v-btn color="success" >Manage pizzas</v-btn></router-link>
    </v-col>
  </v-footer>
</template>

<script>
import ThePizzas from '../components/ThePizzas.vue'
import TheBasket from '../components/TheBasket.vue'
export default {
  components: { ThePizzas, TheBasket},
  setup() {
   }
}
</script>