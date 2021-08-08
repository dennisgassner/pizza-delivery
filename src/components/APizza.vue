<template>
    <v-card elevation="2"  class="mx-auto" width="600">
        <v-row>
            <v-col>
                <v-card-title >{{props.pizza.title}}</v-card-title>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8">
                <v-card-subtitle>{{props.pizza.description}}</v-card-subtitle>
            </v-col>
            <v-col cols="4">
                <v-img height="100" class="mr-1 rounded-lg" :src="props.pizza.imgdata"></v-img>
            </v-col>
        </v-row>
        <v-row>                
            <v-col>
                <v-card-actions>
                    <v-btn rounded color="green darken-2" style="color:#fff;"
                        @click="$emit('buy',props.pizza.id)">
                        Order for {{parseFloat(props.pizza.price).toFixed(2)}} USD
                    </v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        pizza:Object
    },
    emits: ["buy"],

    setup(props) {
        return {
            props
        }
    }

})
</script>


<style scoped>

</style>