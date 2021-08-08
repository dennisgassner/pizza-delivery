<template>
  <v-app>
    <v-app-bar app>
      <h4 class="text-justify text-uppercase font-weight-thin">Pizza Delivery</h4>
    </v-app-bar>
    <v-main>
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
    </v-main>
  </v-app>
</template>

<script>
import ThePizzas from './components/ThePizzas.vue'
import TheBasket from './components/TheBasket.vue'
export default {
  components: { ThePizzas, TheBasket},
  setup() {
   }
}
</script>
