<template>
    <v-card width="300" class="mx-auto mt-4" style="position: fixed;">
        <v-system-bar color="red darken-3" style="background-color:#C62828;" height="10"/>
        <v-system-bar color="green darken-2" style="background-color:#388E3C;" height="10"/>
        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Your Basket
                    </v-list-item-title>
                    <v-list-item-subtitle>Total: {{parseFloat(basket_sum.pizza.price).toFixed(2)}} USD</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-list>
            <template v-for="(item, i) in getOrderedPizzas" :key="i" >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>{{item.count}} x {{item.pizza.display_name}}</v-list-item-title>
                        <v-list-item-subtitle v-html="item.pizza.description"></v-list-item-subtitle>
                        <v-list-item-subtitle>({{parseFloat(item.pizza.price).toFixed(2)}} USD) </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-card>
</template>

<script>
import { defineComponent } from 'vue'
import { computed  } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
    setup() {
        const store = useStore()

        const basket_sum = computed(() =>
        store.getters.get_ordered_pizza.reduce(function(prev, cur) {
            return {count:1, pizza: { price:prev.pizza.price * prev.count + cur.pizza.price * cur.count } };
        }, { count:0, pizza:{price:0} })
        )
        
        return {
            basket_sum,
            getOrderedPizzas: computed(()=>store.getters.get_ordered_pizza)
        }
    
    },
})
</script>

<style scoped>

</style>