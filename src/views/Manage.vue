<template>
  <v-container>
    <v-row>
        <v-col cols="6">
          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field v-model="new_title" label="Title" placeholder="Title"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field v-model="new_desc" label="Description" placeholder="Description"></v-text-field>
                </v-col>
              </v-row>
               <v-row>
                <v-col>
                  <v-subheader class="pl-0">Set the price</v-subheader>
                  <v-slider
                    v-model="new_price"
                    thumb-label="always"
                  ></v-slider>
                </v-col>
              </v-row>
                <v-btn
                color="success"
                class="mr-4"
                @click="createnew"
                >
                Create new pizza
              </v-btn>
            </v-container>
          </v-form>
        </v-col>
        <v-col cols="6">
            <h1>Existing Pizzas</h1>
              <v-card v-for="(item, i) in getOfferedPizzas" :key="i" 
                elevation="2" class="mb-3 p-1 mx-auto">
                <v-card-title >{{item.display_name}}</v-card-title>
                <v-card-subtitle >{{item.description}}</v-card-subtitle>
                <v-card-subtitle > {{parseFloat(item.price).toFixed(2)}} USD</v-card-subtitle>
              <v-card-text/>           
            </v-card>       
        </v-col>
      </v-row>
  </v-container>  
</template>

<script>
import { useStore } from 'vuex'
import { onMounted, computed} from 'vue'

export default ({
  setup() {
    const store = useStore()
    onMounted (() => {
      store.dispatch('fetch_pizzas_graphql');
    })
    return {
      getOfferedPizzas: computed(()=>store.getters.get_available_pizzas)
    }
  },
  data () {
    return {
      new_title:null,
      new_desc:null,
      new_price:null
    }
  },
  methods: {
    createnew() {
      this.$store.dispatch('create_new_pizza', {title:this.new_title, desc:this.new_desc, price:this.new_price})

    }
  }

})
</script>
