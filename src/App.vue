<template>
  <v-app>
    <v-app-bar app color="green darken-2">
       <v-spacer></v-spacer>
        <h2 class="text-justify text-uppercase font-weight-thin" style="color:#C62828;">Pizza Delivery</h2>
          <subtitle-2 style="color:#fff;" class="mt-2">...today's special: your pizza extra round!</subtitle-2>
       <v-spacer></v-spacer>
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
