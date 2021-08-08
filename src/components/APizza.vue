<template>

    <v-card  max-width="300" min-width="300">
        <v-img
        height="250"
        src="@/assets/pizza-3010062_640.jpg"
        ></v-img>

        <v-card-title>{{props.pizza.title}}</v-card-title>

        <v-card-subtitle>{{props.pizza.description}}</v-card-subtitle>
        <v-card-subtitle>{{parseFloat(props.pizza.price).toFixed(2)}} USD</v-card-subtitle>

        <v-card-actions>
            <v-btn color="orange lighten-2" text @click="$emit('buy',props.pizza.id)">Order</v-btn>
        </v-card-actions>
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